"use client";

import { Preloader } from "@/components/clientComponents/preloaders/Preloader";
import s from "./test.module.scss";
import { useState } from "react";
import { TheButton } from "@/components/clientComponents/buttons/btn/TheButton";

export default function Test() {
  const [showPre, setShowPre] = useState<boolean>(false);
  const [loaderType, setLoaderType] = useState<"local" | "blocking">('local')
  console.log(showPre);

  return (
    <div className={s.mainWrapper }>
      <div className={s.container}>
        <div className={s.btn}>
        <TheButton btnText="CICK" callback={() => setShowPre((prev) => !prev)} isLoading={showPre}/>
        </div>
        <div>
     uuntur laudantium earum sequi, vero
          necessitatibus iste facilis impedit porro? Tempore consequatur aliquam
          aperiam dolore delectus? Minus sunt fugit totam dolores nemo aperiam
          doloremque amet natus? Libero est sit accusantium nihil aliquam, quas
          temporibus! Maiores minus accusamus dolore inventore error commodi
         us at veniam fugiat id dolorum sapiente
          corporis provident non? Recusandae, ratione excepturi! Impedit, harum
          earum. Ducimus dolor impedit officiis reprehenderit quae quas id! Sit
          molestiae aperiam reiciendis quasi? Doloribus cumque provident nisi
          quasi corporis praesentium eveniet. Rem explicabo voluptas ad officia
          atque. Nulla perspiciatis saepe, rerum ipsa dolorum explicabo aperiam
          voluptatibus, iste, ducimus aliquid eius facilis aliquam. Asperiores
          eum eveniet facere pariatur optio. Commodi accusantium accusamus velit
          temporibus illum, vel recusandae voluptatibus! Totam mollitia
          doloribus rem nobis, quae quos. Odit mollitia minima voluptatem rerum
          officiis sit blanditiis omnis accusamus! Officiis sit eos dolore enim
          accusantium nulla architecto unde. Aliquid dicta accusantium
          explicabo! Rerum, accusantium! Blanditiis, magnam! Porro dolorem cum
          laborum temporibus voluptates tenetur, similique laudantium voluptatem
          architecto doloribus nesciunt nihil? At beatae distinctio, maxime sunt
          iste culpa qui cupiditate! A, vero sunt! Sit, hic suscipit facere
          omnis optio quos! Dolorum maiores nihil inventore autem! Veniam
          cupiditate perferendis error animi. Error, itaque! Optio, tempora
          placeat! Vel facilis error ullam dolor exercitationem nostrum eos?
          Veniam consectetur perferendis porro unde dolorum laboriosam ipsum,
          corrupti, id soluta libero temporibus eos dignissimos at explicabo
          facere? Deleniti officiis nesciunt culpa incidunt ullam, dolorem
          dolores eius dignissimos vero delectus? Iusto repellendus labore
          deserunt similique itaque tempora nesciunt corrupti vitae, vel sunt
          numquam velit eius suscipit rem temporibus ab iure ut consequuntur
          necessitatibus. Veniam, sit exercitationem voluptas unde accusantium
          nam.
        </div>
        <div className={s.testBlock}>
        <Preloader show={showPre} type="local"/>
        </div>
      </div>
    </div>
  );
}
