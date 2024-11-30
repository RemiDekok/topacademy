import { Component } from "react";
import { storyblokEditable } from "@storyblok/react";
import css from "./List.module.scss"; // Import your styling

export default class List extends Component {
  render() {
    const { blok } = this.props; // Get the blok (list) from props

    return (
      <section className={css["rich-text-section"]} {...storyblokEditable(blok)}>
        {/* Title of the List */}
        <h2 className={css["rich-text-section__title"]}>{blok.title}</h2>

        <div className={css["rich-text-section__list"]}>
          {/* Loop through each 'element' which is a Person block */}
          {blok.elements.map((nestedBlok) => (
            <div className={css["rich-text-section__item"]} key={nestedBlok._uid}>
              
              {/* Check if the image exists and display it */}
              {nestedBlok.image && (
                <img
                  src={nestedBlok.image.filename} // Assuming the image field is called 'filename'
                  alt={nestedBlok.image.alt || nestedBlok.title} // Fallback to title if no alt text
                  className={css["rich-text-section__image"]}
                />
              )}
              
              {/* Display the title (name of the person) */}
              <h3 className={css["rich-text-section__item-title"]}>{nestedBlok.title}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }
}