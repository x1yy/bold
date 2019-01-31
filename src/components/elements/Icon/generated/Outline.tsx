/* tslint:disable */
import * as React from "react";

const SvgOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <defs>
      <path
        id="outline_svg__a"
        d="M12 2c5.523 0 10 4.478 10 10s-4.477 10-10 10S2 17.522 2 12 6.477 2 12 2zm0 18c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8 3.589 8 8 8zM9.121 7.51A3.5 3.5 0 0 1 15.5 9.5c0 1.577-1.376 2.6-2.088 3.136-.571.43-.419 1.381-1.454 1.364-.784-.013-.923-.802-.93-1-.035-1.088 1.034-1.721 1.26-1.867.883-.57 1.212-1.193 1.212-1.633a1.5 1.5 0 1 0-2.744-.838c-.161.24-.519.68-1.26.29-.74-.39-.58-1.147-.375-1.443zM12 15.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"
      />
    </defs>
    <use xlinkHref="#outline_svg__a" />
  </svg>
);

export default SvgOutline;
