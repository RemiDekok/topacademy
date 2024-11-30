import React, { Component } from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import css from "./TwoSplit.module.scss";

export default class TwoSplit extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<>
				<section {...storyblokEditable(this.props.blok)} className={css["split"]}>
					<div className={css["Leftcontent"]}>
						{this.props.blok.Leftcontent.map((nestedBlok) => (
							<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
						))}
					</div>
					<div className={css["Rightcontent"]}>
						{this.props.blok.Rightcontent.map((nestedBlok) => (
							<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
						))}
					</div>
				</section>
			</>
		);
	}
}