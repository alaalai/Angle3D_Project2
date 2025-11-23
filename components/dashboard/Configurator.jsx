'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { useMemo, useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';

function DemoModel({ color }) {
  return (
    <Stage intensity={1.2} adjustCamera environment="city">
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.4, 1, 1]} />
        <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
      </mesh>
    </Stage>
  );
}

export function Configurator() {
  const [color, setColor] = useState('#8b5cf6');
  const [part, setPart] = useState('الأبواب');
  const [note, setNote] = useState('');

  const snapshotName = useMemo(() => `snapshot-${part}-${color}`.replace('#', ''), [part, color]);

  return (
    <div className="grid lg:grid-cols-3 gap-4">
      <Card className="lg:col-span-2" title="كونفيجريتر ثلاثي الأبعاد" subtitle="Three.js + R3F">
        <div className="h-[420px] rounded-xl overflow-hidden border border-white/5">
          <Canvas shadows camera={{ position: [3, 2, 3], fov: 45 }}>
            <color attach="background" args={[0.05, 0.07, 0.1]} />
            <ambientLight intensity={0.4} />
            <spotLight position={[6, 6, 6]} angle={0.3} penumbra={1} intensity={1.2} castShadow />
            <DemoModel color={color} />
            <OrbitControls />
          </Canvas>
        </div>
      </Card>
      <Card title="التحكم" subtitle="الأجزاء والخامات">
        <div className="space-y-4">
          <Input label="لون الخامة" type="color" value={color} onChange={(e) => setColor(e.target.value)} />
          <label className="text-sm text-white/80">الأجزاء</label>
          <div className="flex flex-wrap gap-2">
            {['الأبواب', 'المقابض', 'الرفوف'].map((p) => (
              <Button key={p} variant={part === p ? 'primary' : 'ghost'} onClick={() => setPart(p)}>
                {p}
              </Button>
            ))}
          </div>
          <Input label="ملاحظة" value={note} onChange={(e) => setNote(e.target.value)} placeholder="احفظ سبب التعديل" />
          <Button className="w-full">حفظ التخصيص</Button>
          <Button variant="outline" className="w-full">تصدير Snapshot ({snapshotName})</Button>
        </div>
      </Card>
    </div>
  );
}
