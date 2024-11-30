import { Component } from "react";
import { storyblokEditable } from "@storyblok/react";
import Element from "../Element/Element";
import css from "./List.module.scss";

export default class List extends Component {
  render() {
    const { blok } = this.props;

    return (
      <section className={css["rich-text-section"]} {...storyblokEditable(blok)}>
        {/* Titel bovenaan */}
        <h2 className={css["rich-text-section__title"]}>{blok.title}</h2>
        
        <div className={css["rich-text-section__list"]}>
          {blok.elements.map((nestedBlok) => (
            <div className={css["rich-text-section__item"]} key={nestedBlok._uid}>
              {/* Afbeelding */}
              {nestedBlok.image && (
                <img
                  src={nestedBlok.image.filename}
                  alt={nestedBlok.image.alt || nestedBlok.title}
                  className={css["rich-text-section__image"]}
                />
              )}
              {/* Titel */}
              <h3 className={css["rich-text-section__item-title"]}>
                {nestedBlok.title}
              </h3>
              {/* Subtitel */}
              <p className={css["rich-text-section__subtitle"]}>
                {nestedBlok.subtitle}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
