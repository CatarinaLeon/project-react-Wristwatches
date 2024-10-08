import uuid from "react-uuid";
import s from "./ItemsList.module.css";

export default function ItemsList({ children, className, item, config }) {
  return (
    <ul className={`${s.list} ${className}`}>
      {config.map(({ img_desktop_1x, img_desktop_2x, alt, img_mob_1x }) => (
        <li className={s.listItems} key={uuid()}>
          <picture>
            <source
              media="(min-width: 1200px)"
              srcSet={`${img_desktop_1x} 1x, ${img_desktop_2x} 2x`}
              width={185}
              height={125}
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${item.img_tablet_1x} 1x, ${item.img_tablet_2x} 2x`}
              width={115}
              height={78}
            />
            <source
              media="(max-width: 480px), (min-width: 480px)"
              srcSet={`${item.img_mob_1x} 1x, ${item.img_mob_2x} 2x`}
              width={115}
              height={78}
            />
            <img src={img_mob_1x} alt={alt} />
          </picture>
          {children}
        </li>
      ))}
    </ul>
    // <ul>
    //   <li className={`${s.listItem} ${className}`}>
    //     <picture>
    //       <source
    //         media="(min-width: 1200px)"
    //         srcSet={`${item.img_desktop_1x} 1x, ${item.img_desktop_2x} 2x`}
    //         width={185}
    //         height={125}
    //       />
    //       <source
    //         media="(min-width: 768px)"
    //         srcSet={`${item.img_tablet_1x} 1x, ${item.img_tablet_2x} 2x`}
    //         width={115}
    //         height={78}
    //       />
    //       <source
    //         media="(max-width: 480px), (min-width: 480px)"
    //         srcSet={`${item.img_mob_1x} 1x, ${item.img_mob_2x} 2x`}
    //         width={115}
    //         height={78}
    //       />
    //       <img src={item.img_mob_1x} alt={item.alt} />
    //     </picture>
    //   </li>
    // </ul>
  );
}
