import Image from 'next/image';

import { useConfig } from './useConfig';
// Est
export default function Home() {
  const helloWorld = useConfig();
  return (
    <main className="flex justify-center">
      <div className="columns-2 px-2 py-12">
        <div>holis</div>
        <div>holis</div>
        <div>holis</div>
        <div>holis</div>
        <div>holis</div>
      </div>
    </main>
  );
}
