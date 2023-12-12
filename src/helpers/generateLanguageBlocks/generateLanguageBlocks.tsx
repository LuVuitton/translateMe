import { languageMapping } from "../mappingData";
import s from './index.module.scss'

export const generatelanguagesBlocks = (languages: number[], color: "yellow" | "blue") => {
    if (languages.length <= 3) {
      return languages.map((e, i) => (
        <div
          key={i}
          className={`${s.langItem} `}
          title={languageMapping[e].full}
          // key={"add id to lang"}
        >
          {languageMapping[e].short}
        </div>
      ));
    } else {
    const newArr = [];

    for (let i = 0; i < 2; i++) {
      const e = languages[i];
      newArr.push(
        <div
          key={i}
          className={`${s.langItem} `}

          title={languageMapping[e].full}
        >
          {languageMapping[e].short}
        </div>
      );
    }
    newArr.push(  <div
      className={`${s.langItem} `}

    >
      +{languages.length-2}
    </div>)

    return newArr
    }
  };