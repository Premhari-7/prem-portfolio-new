import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const res = await fetch('https://reactbits.dev/r/AeroShards-TS-CSS.json');
    if (!res.ok) {
      return NextResponse.json({ success: false, error: 'Failed to fetch JSON from React Bits' });
    }
    
    const data = await res.json();
    
    const tsxContent = data.files.find((f: any) => f.path === 'AeroShards.tsx')?.content;
    const cssContent = data.files.find((f: any) => f.path === 'AeroShards.css')?.content;
    
    if (tsxContent && cssContent) {
      const tsxPath = path.join(process.cwd(), 'src/components/common/AeroShards.tsx');
      const cssPath = path.join(process.cwd(), 'src/components/common/AeroShards.css');
      
      fs.writeFileSync(tsxPath, tsxContent);
      fs.writeFileSync(cssPath, cssContent);
      
      return NextResponse.json({ 
        success: true, 
        message: 'AeroShards component files successfully written!', 
        nextSteps: 'Please restart your development server if needed, and make sure vgpu is installed!' 
      });
    } else {
      return NextResponse.json({ success: false, error: 'Could not find component contents in the fetched JSON.' });
    }
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message });
  }
}
