import React from "react";

const GMap: React.FC<GMapProps> = () => {
	return (
		<div className="mapouter relative text-right h-80" style={{ width: '739px' }}>
			<div className="gmap_canvas overflow-hidden">
				<iframe
					width="739"
					height="310"
					id="gmap_canvas"
					src="https://maps.google.com/maps?q=tap%20academy&t=&z=13&ie=UTF8&iwloc=&output=embed"
					scrolling="no"
				>
				</iframe>
			</div>
		</div>
	)
};

type GMapProps = {};

export default GMap;