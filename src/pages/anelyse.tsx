import { useEffect, useState } from "react";
import { Header, Loading } from "../components";
import Image from "next/image";

export default function Anelyse() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  });
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div className="container">
            <h1>Oi Anelyse</h1>
            <Image
              src="/img/paginaInicial.png"
              alt="Imagem pagina inicial"
              width={606}
              height={1280}
            />
          </div>
        </>
      )}
    </>
  );
}
