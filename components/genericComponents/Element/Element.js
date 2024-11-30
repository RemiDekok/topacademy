import React, { Component } from "react";
import css from "./Element.module.scss";
import { storyblokEditable } from "@storyblok/react";
import { RichTextToHTML } from "../../../functions/storyBlokRichTextRenderer";
import Link from "next/link";

export default class Element extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { blok } = this.props;
		// Make sure blok.content and blok.content.title exist
		const title = blok.content?.title || "No title available"; // Fallback title if missing

		return (
			<>
				<div {...storyblokEditable(blok.content)} className={css["item"]}>
					<Link className={css["link"]} href={`${blok.full_slug}`}>
						<div className={css["header"]}>
							<span className={css["title"]}>{title}</span>
						</div>
					</Link>
				</div>
			</>
		);
	}
}
