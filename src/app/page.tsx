import { Deal, FeatureCategory, PopularProduct, SlideShow } from "@/components";
import Image from "next/image";

export default function Home() {
	return (
		<div className="px-5 my-7">
			<section>
				<SlideShow />
			</section>
			<section>
				<FeatureCategory />
			</section>
			<section>
				<PopularProduct />
			</section>
			<section>
				<Deal />
			</section>
		</div>
	);
}
