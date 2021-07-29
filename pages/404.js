import React, { useEffect } from 'react';
import { useRouter } from "next/dist/client/router";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, []);

  return <div>Opsss sorry no such page exists</div>;
}
