// src/components/SkillsDie.tsx
import { Suspense, useRef, useMemo, useState, FC } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

interface Skill {
  name: string;
  icon: string;
  url: string;
}

const skills: Skill[] = [
  { name: "C++",       icon: "/cpp.svg",        url: "https://isocpp.org/" },
  { name: "CSS",       icon: "/css.svg",        url: "https://developer.mozilla.org/docs/Web/CSS" },
  { name: "Git",       icon: "/git.svg",        url: "https://git-scm.com/" },
  { name: "GitHub",    icon: "/github.svg",     url: "https://github.com/" },
  { name: "HTML",      icon: "/html5.svg",      url: "https://developer.mozilla.org/docs/Web/HTML" },
  { name: "JavaScript",icon: "/javascript.svg", url: "https://developer.mozilla.org/docs/Web/JavaScript" },
  { name: "Node.js",   icon: "/nodejs.svg",     url: "https://nodejs.org/" },
  { name: "Python",    icon: "/python.svg",     url: "https://www.python.org/" },
  { name: "React",     icon: "/react.svg",      url: "https://reactjs.org/" },
  { name: "TypeScript",icon: "/typescript.svg", url: "https://www.typescriptlang.org/" },
  { name: "Unity",     icon: "/unity.svg",      url: "https://unity.com/" },
  { name: "Vite",      icon: "/vite.svg",       url: "https://vitejs.dev/" },
];

type CanvasTex = THREE.CanvasTexture;

interface FaceStickerProps {
  position: THREE.Vector3;
  normal: THREE.Vector3;
  texture: CanvasTex;
  index: number;
  setHovered: (i: number | null) => void;
}

const FaceSticker: FC<FaceStickerProps> = ({
  position,
  normal,
  texture,
  index,
  setHovered,
}) => {
  const ref = useRef<THREE.Mesh>(null!);

  // Precompute quaternion to rotate +Z into the face normal
  const quat = useMemo(() => {
    return new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 0, 1),
      normal.clone().normalize()
    );
  }, [normal]);

  useFrame(() => {
    ref.current.quaternion.copy(quat);
  });

  return (
    <mesh
      ref={ref}
      position={position}
      onPointerOver={e => { e.stopPropagation(); setHovered(index); }}
      onPointerOut={e => { e.stopPropagation(); setHovered(null); }}
      onClick={() => window.open(skills[index].url, "_blank")}
    >
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        map={texture}
        transparent
        alphaTest={0.1}
        side={THREE.DoubleSide}
        polygonOffset
        polygonOffsetFactor={1}
        polygonOffsetUnits={1}
      />
    </mesh>
  );
};

interface DodecahedronWithStickersProps {
  setHovered: (i: number | null) => void;
}

const DodecahedronWithStickers: FC<DodecahedronWithStickersProps> = ({ setHovered }) => {
  const groupRef = useRef<THREE.Group>(null!);

  // 1) Load all SVGs
  const raw = useLoader(THREE.TextureLoader, skills.map(s => s.icon));

  // 2) Rasterize each into a CanvasTexture
  const textures = useMemo<CanvasTex[]>(() => {
    return raw.map(t => {
      const img = t.image as HTMLImageElement;
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0);
      const tex = new THREE.CanvasTexture(canvas);
      tex.needsUpdate = true;
      return tex;
    });
  }, [raw]);

  // 3) Spin the whole group
  useFrame(() => {
    groupRef.current.rotation.y += 0.003;
    groupRef.current.rotation.x += 0.001;
  });

  // 4) Compute true face centers & normals using non‐indexed geometry
  const faceData = useMemo(() => {
    const geo = new THREE.DodecahedronGeometry(2);
    const non = geo.toNonIndexed();
    const posAttr = non.getAttribute("position");
    const triCount = posAttr.count / 3;
    type Tri = { center: THREE.Vector3; normal: THREE.Vector3 };
    const tris: Tri[] = [];

    for (let t = 0; t < triCount; t++) {
      const vA = new THREE.Vector3().fromBufferAttribute(posAttr, 3*t + 0);
      const vB = new THREE.Vector3().fromBufferAttribute(posAttr, 3*t + 1);
      const vC = new THREE.Vector3().fromBufferAttribute(posAttr, 3*t + 2);

      const center = vA.clone().add(vB).add(vC).divideScalar(3);
      const normal = new THREE.Triangle(vA, vB, vC)
        .getNormal(new THREE.Vector3())
        .normalize();

      tris.push({ center, normal });
    }

    // Group triangles by nearly-equal normals → 12 faces
    const groups: { normal: THREE.Vector3; centers: THREE.Vector3[] }[] = [];
    tris.forEach(({ center, normal }) => {
      const g = groups.find(g => g.normal.dot(normal) > 0.999);
      if (g) g.centers.push(center);
      else groups.push({ normal: normal.clone(), centers: [center] });
    });

    // Average each group and offset slightly outward
    return groups.slice(0, skills.length).map(g => {
      const avg = g.centers
        .reduce((sum, v) => sum.add(v), new THREE.Vector3())
        .divideScalar(g.centers.length);
      const n = g.normal.clone();
      if (n.dot(avg) < 0) n.negate();
      return {
        pos: avg.add(n.multiplyScalar(0.01)),
        normal: n,
      };
    });
  }, []);

  return (
    <group ref={groupRef}>
      <mesh>
        <dodecahedronGeometry args={[2]} />
        <meshPhysicalMaterial   
          color="#ffffff"   
          metalness={0.15}
          clearcoat={0.1}
          roughness={0.1}
       />
      </mesh>

      {faceData.map((d, i) => (
        <FaceSticker
          key={i}
          position={d.pos}
          normal={d.normal}
          texture={textures[i]}
          index={i}
          setHovered={setHovered}
        />
      ))}
    </group>
  );
};

export default function SkillsDie() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className="relative w-full h-[500px]"
      style={{ cursor: hovered !== null ? "pointer" : "default" }}
    >
      <h2 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-3xl font-bold pointer-events-none z-10">
        Technical Skills
      </h2>
      <div
        style={{
          position: "absolute",
          top: "56px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#555",
          fontSize: "1.1rem",
          fontStyle: "italic",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        Click and drag to rotate
      </div>

      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        <ambientLight intensity={3.2} />
        <directionalLight position={[2, 2, 2]} intensity={2.0}/>
        <Suspense fallback={null}>
          <DodecahedronWithStickers setHovered={setHovered} />
        </Suspense>
      </Canvas>

      {hovered !== null && (
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "white",
            color: "#111",
            padding: "12px 20px",
            borderRadius: "12px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
            textAlign: "center",
            maxWidth: "280px",
            zIndex: 1,
          }}
        >
          <div style={{ fontSize: "1.4rem", fontWeight: 600, marginBottom: "8px" }}>
            {skills[hovered].name}
          </div>
          <a
            href={skills[hovered].url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "6px 12px",
              fontSize: "1rem",
              color: "#555",
              fontStyle: "italic",
              borderRadius: "6px",
              textDecoration: "none",
              letterSpacing: "0.03em",
            }}
          >
            Click to visit site
          </a>
        </div>
      )}
    </div>
  );
}
