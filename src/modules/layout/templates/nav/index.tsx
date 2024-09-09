import { Suspense } from "react";

import { listRegions } from "@lib/data";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import CartButton from "@modules/layout/components/cart-button";
import SideMenu from "@modules/layout/components/side-menu";

export default async function Nav() {
	const regions = await listRegions().then((regions) => regions);
	const siteIcon = (
		<svg
			width="169"
			height="41"
			viewBox="0 0 169 41"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="23.9245" cy="6.41721" r="3.87278" fill="#FD9F02" />
			<circle
				cx="23.9245"
				cy="6.41721"
				r="3.87278"
				fill="#612286"
				fillOpacity="0.15"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M23.95 10.29C26.0889 10.29 27.8228 8.55609 27.8228 6.41721C27.8228 6.35822 27.8215 6.29953 27.8189 6.24117H36.9366C38.5599 6.24117 39.9206 7.46796 40.0883 9.08259L42.775 34.9598C42.9691 36.8292 41.5027 38.4557 39.6233 38.4557H8.2578C6.38522 38.4557 4.92108 36.8404 5.10438 34.9768L7.64968 9.09964C7.80923 7.4776 9.17324 6.24117 10.8031 6.24117H20.0812C20.0786 6.29953 20.0773 6.35822 20.0773 6.41721C20.0773 8.55609 21.8112 10.29 23.95 10.29ZM20.0812 6.24117C20.1732 4.184 21.8702 2.54443 23.95 2.54443C26.0299 2.54443 27.7269 4.184 27.8189 6.24117H20.0812Z"
				fill="#612286"
			/>
			<path
				d="M18.8653 18.2984L16.2487 18.9526C16.1516 18.9769 16.0835 19.0641 16.0835 19.1641V28.4201C16.0835 29.1053 16.2242 29.7874 16.5482 30.3911C18.0147 33.1235 19.5025 33.8431 23.0871 33.4095C23.1959 33.3963 23.2793 33.3034 23.2793 33.1938V31.011C23.2793 30.8815 23.1667 30.7808 23.0378 30.7929C21.6071 30.928 20.727 30.8586 20.0638 30.4432C19.3097 29.9708 19.1362 28.9876 19.1362 28.0977V24.2272C19.1362 24.1067 19.2339 24.0091 19.3543 24.0091H23.0612C23.1816 24.0091 23.2793 23.9115 23.2793 23.7911V21.6105C23.2793 21.4901 23.1816 21.3925 23.0612 21.3925H19.3543C19.2339 21.3925 19.1362 21.2949 19.1362 21.1744V18.51C19.1362 18.3681 19.0029 18.264 18.8653 18.2984Z"
				fill="#E68C16"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M30.4749 13.5426C30.4749 13.3017 30.2797 13.1064 30.0388 13.1064H27.6402C27.3994 13.1064 27.2041 13.3017 27.2041 13.5426V20.5203C27.2041 20.7611 27.0089 20.9564 26.768 20.9564H24.3695C24.1286 20.9564 23.9333 21.1516 23.9333 21.3925V23.7911C23.9333 24.0319 24.1286 24.2272 24.3695 24.2272H26.768C27.0089 24.2272 27.2041 24.4224 27.2041 24.6633V27.0618C27.2041 27.3027 27.3994 27.498 27.6402 27.498H30.0388C30.2797 27.498 30.4749 27.3027 30.4749 27.0618V13.5426Z"
				fill="#E68C16"
			/>
			<path
				d="M57.5225 22.3037V10.8659H53.0444V9.24254H63.8478V10.8659H59.3697V22.3037H57.5225ZM65.88 22.3037V9.24254H70.9739C72.1183 9.24254 73.0948 9.42291 73.9033 9.78365C74.7119 10.1444 75.3338 10.6668 75.7692 11.351C76.2046 12.0351 76.4222 12.8499 76.4222 13.7953C76.4222 14.7407 76.2046 15.5554 75.7692 16.2396C75.3338 16.9113 74.7119 17.4275 73.9033 17.7883C73.0948 18.149 72.1183 18.3294 70.9739 18.3294H66.9063L67.7459 17.4711V22.3037H65.88ZM74.6123 22.3037L71.2911 17.5644H73.2876L76.6462 22.3037H74.6123ZM67.7459 17.6577L66.9063 16.7434H70.9179C72.1121 16.7434 73.0139 16.4884 73.6234 15.9784C74.2454 15.4559 74.5564 14.7282 74.5564 13.7953C74.5564 12.8624 74.2454 12.1409 73.6234 11.6309C73.0139 11.1209 72.1121 10.8659 70.9179 10.8659H66.9063L67.7459 9.93292V17.6577ZM77.459 22.3037L83.3738 9.24254H85.221L91.1545 22.3037H89.1954L83.9149 10.2874H84.6613L79.3808 22.3037H77.459ZM79.9779 19.0384L80.4817 17.5457H87.8333L88.3744 19.0384H79.9779ZM93.1029 22.3037V9.24254H98.6073C100 9.24254 101.226 9.51621 102.283 10.0635C103.353 10.6109 104.18 11.3759 104.765 12.3586C105.362 13.3413 105.66 14.4794 105.66 15.7731C105.66 17.0668 105.362 18.205 104.765 19.1877C104.18 20.1704 103.353 20.9354 102.283 21.4827C101.226 22.03 100 22.3037 98.6073 22.3037H93.1029ZM94.9688 20.6804H98.4953C99.5775 20.6804 100.51 20.4751 101.294 20.0647C102.09 19.6542 102.706 19.082 103.141 18.348C103.577 17.6017 103.794 16.7434 103.794 15.7731C103.794 14.7904 103.577 13.9321 103.141 13.1982C102.706 12.4643 102.09 11.8921 101.294 11.4816C100.51 11.0711 99.5775 10.8659 98.4953 10.8659H94.9688V20.6804ZM110.216 14.8775H116.933V16.4635H110.216V14.8775ZM110.384 20.6804H117.997V22.3037H108.518V9.24254H117.736V10.8659H110.384V20.6804ZM130.385 9.24254H132.251V22.3037H130.385V9.24254ZM122.884 22.3037H121.018V9.24254H122.884V22.3037ZM130.553 16.4822H122.698V14.8588H130.553V16.4822ZM141.571 22.453C139.855 22.453 138.505 21.9616 137.522 20.9789C136.54 19.9962 136.048 18.5595 136.048 16.6688V9.24254H137.914V16.5941C137.914 18.0495 138.231 19.1131 138.866 19.7848C139.513 20.4565 140.421 20.7923 141.59 20.7923C142.772 20.7923 143.68 20.4565 144.314 19.7848C144.961 19.1131 145.284 18.0495 145.284 16.5941V9.24254H147.094V16.6688C147.094 18.5595 146.603 19.9962 145.62 20.9789C144.65 21.9616 143.3 22.453 141.571 22.453ZM150.92 22.3037V9.24254H156.779C158.284 9.24254 159.441 9.5473 160.249 10.1568C161.058 10.7539 161.462 11.5749 161.462 12.6198C161.462 13.3288 161.3 13.9259 160.977 14.411C160.666 14.8962 160.243 15.2693 159.708 15.5306C159.173 15.7918 158.595 15.9224 157.973 15.9224L158.309 15.3626C159.055 15.3626 159.714 15.4932 160.286 15.7545C160.859 16.0157 161.313 16.4013 161.649 16.9113C161.984 17.4089 162.152 18.0308 162.152 18.7772C162.152 19.8967 161.729 20.7675 160.884 21.3894C160.05 21.999 158.806 22.3037 157.152 22.3037H150.92ZM152.786 20.7923H157.077C158.11 20.7923 158.899 20.6182 159.447 20.2699C159.994 19.9216 160.268 19.3743 160.268 18.6279C160.268 17.8691 159.994 17.3156 159.447 16.9673C158.899 16.619 158.11 16.4448 157.077 16.4448H152.618V14.9335H156.611C157.556 14.9335 158.29 14.7593 158.812 14.411C159.335 14.0627 159.596 13.5403 159.596 12.8437C159.596 12.1471 159.335 11.6247 158.812 11.2764C158.29 10.9281 157.556 10.7539 156.611 10.7539H152.786V20.7923Z"
				fill="#612286"
			/>
			<path
				d="M61.0131 33.7438C60.6965 33.7438 60.3937 33.6963 60.1048 33.6013C59.8158 33.5024 59.5882 33.3757 59.422 33.2213L59.6417 32.7583C59.8 32.8968 60.0018 33.0116 60.2472 33.1026C60.4926 33.1936 60.7479 33.2391 61.0131 33.2391C61.2545 33.2391 61.4505 33.2114 61.6009 33.156C61.7513 33.1006 61.8621 33.0254 61.9333 32.9304C62.0046 32.8315 62.0402 32.7207 62.0402 32.598C62.0402 32.4555 61.9927 32.3407 61.8977 32.2536C61.8067 32.1665 61.6859 32.0973 61.5355 32.0458C61.3891 31.9904 61.2268 31.9429 61.0487 31.9033C60.8706 31.8638 60.6905 31.8183 60.5085 31.7668C60.3304 31.7114 60.1661 31.6421 60.0157 31.559C59.8693 31.4759 59.7505 31.3651 59.6595 31.2265C59.5685 31.0841 59.5229 30.902 59.5229 30.6803C59.5229 30.4666 59.5784 30.2707 59.6892 30.0926C59.804 29.9105 59.9781 29.7661 60.2116 29.6592C60.4491 29.5484 60.7499 29.493 61.114 29.493C61.3555 29.493 61.5949 29.5246 61.8324 29.588C62.0699 29.6513 62.2757 29.7423 62.4498 29.8611L62.2539 30.336C62.0758 30.2173 61.8878 30.1322 61.6899 30.0807C61.492 30.0253 61.3001 29.9976 61.114 29.9976C60.8805 29.9976 60.6886 30.0273 60.5381 30.0867C60.3877 30.146 60.2769 30.2252 60.2057 30.3241C60.1384 30.4231 60.1048 30.5339 60.1048 30.6566C60.1048 30.803 60.1503 30.9198 60.2413 31.0069C60.3363 31.094 60.457 31.1632 60.6035 31.2147C60.7539 31.2661 60.9181 31.3136 61.0962 31.3572C61.2743 31.3967 61.4524 31.4422 61.6305 31.4937C61.8126 31.5452 61.9769 31.6124 62.1233 31.6956C62.2737 31.7787 62.3944 31.8895 62.4855 32.028C62.5765 32.1665 62.622 32.3447 62.622 32.5623C62.622 32.7721 62.5646 32.968 62.4498 33.1501C62.335 33.3282 62.1569 33.4727 61.9155 33.5835C61.678 33.6904 61.3772 33.7438 61.0131 33.7438ZM68.0133 29.5405H68.6069V33.6963H68.0133V29.5405ZM65.6266 33.6963H65.0329V29.5405H65.6266V33.6963ZM68.0667 31.844H65.5673V31.3275H68.0667V31.844ZM73.2705 33.7438C72.9539 33.7438 72.659 33.6904 72.3859 33.5835C72.1168 33.4766 71.8833 33.3282 71.6854 33.1382C71.4875 32.9443 71.3331 32.7187 71.2223 32.4614C71.1115 32.2041 71.0561 31.9231 71.0561 31.6184C71.0561 31.3136 71.1115 31.0326 71.2223 30.7753C71.3331 30.5181 71.4875 30.2944 71.6854 30.1045C71.8833 29.9105 72.1168 29.7601 72.3859 29.6533C72.6551 29.5464 72.9499 29.493 73.2705 29.493C73.5871 29.493 73.8781 29.5464 74.1432 29.6533C74.4124 29.7562 74.6459 29.9046 74.8438 30.0985C75.0456 30.2885 75.2 30.5121 75.3069 30.7694C75.4177 31.0267 75.4731 31.3097 75.4731 31.6184C75.4731 31.9271 75.4177 32.2101 75.3069 32.4674C75.2 32.7246 75.0456 32.9502 74.8438 33.1442C74.6459 33.3341 74.4124 33.4826 74.1432 33.5894C73.8781 33.6923 73.5871 33.7438 73.2705 33.7438ZM73.2705 33.2154C73.5001 33.2154 73.7118 33.1758 73.9058 33.0967C74.1037 33.0175 74.2738 32.9067 74.4163 32.7642C74.5628 32.6178 74.6756 32.4476 74.7547 32.2536C74.8379 32.0597 74.8794 31.8479 74.8794 31.6184C74.8794 31.3888 74.8379 31.1771 74.7547 30.9831C74.6756 30.7892 74.5628 30.621 74.4163 30.4785C74.2738 30.332 74.1037 30.2192 73.9058 30.1401C73.7118 30.0609 73.5001 30.0214 73.2705 30.0214C73.037 30.0214 72.8213 30.0609 72.6234 30.1401C72.4295 30.2192 72.2593 30.332 72.1128 30.4785C71.9664 30.621 71.8516 30.7892 71.7685 30.9831C71.6893 31.1771 71.6497 31.3888 71.6497 31.6184C71.6497 31.8479 71.6893 32.0597 71.7685 32.2536C71.8516 32.4476 71.9664 32.6178 72.1128 32.7642C72.2593 32.9067 72.4295 33.0175 72.6234 33.0967C72.8213 33.1758 73.037 33.2154 73.2705 33.2154ZM77.9241 33.6963V29.5405H79.5449C79.909 29.5405 80.2197 29.5979 80.477 29.7126C80.7342 29.8274 80.9321 29.9936 81.0707 30.2113C81.2092 30.429 81.2785 30.6883 81.2785 30.9891C81.2785 31.2899 81.2092 31.5491 81.0707 31.7668C80.9321 31.9805 80.7342 32.1468 80.477 32.2655C80.2197 32.3803 79.909 32.4377 79.5449 32.4377H78.2506L78.5178 32.1586V33.6963H77.9241ZM78.5178 32.218L78.2506 31.9212H79.5271C79.907 31.9212 80.194 31.84 80.3879 31.6777C80.5858 31.5155 80.6848 31.2859 80.6848 30.9891C80.6848 30.6922 80.5858 30.4627 80.3879 30.3004C80.194 30.1381 79.907 30.057 79.5271 30.057H78.2506L78.5178 29.7601V32.218ZM83.6943 33.6963V29.5405H85.315C85.6792 29.5405 85.9899 29.5979 86.2471 29.7126C86.5044 29.8274 86.7023 29.9936 86.8408 30.2113C86.9793 30.429 87.0486 30.6883 87.0486 30.9891C87.0486 31.2899 86.9793 31.5491 86.8408 31.7668C86.7023 31.9805 86.5044 32.1468 86.2471 32.2655C85.9899 32.3803 85.6792 32.4377 85.315 32.4377H84.0208L84.288 32.1586V33.6963H83.6943ZM84.288 32.218L84.0208 31.9212H85.2972C85.6772 31.9212 85.9641 31.84 86.1581 31.6777C86.356 31.5155 86.4549 31.2859 86.4549 30.9891C86.4549 30.6922 86.356 30.4627 86.1581 30.3004C85.9641 30.1381 85.6772 30.057 85.2972 30.057H84.0208L84.288 29.7601V32.218ZM89.4644 33.6963V29.5405H90.0581V33.6963H89.4644ZM92.8459 33.6963V29.5405H93.3327L96.0815 32.9542H95.8262V29.5405H96.4199V33.6963H95.9331L93.1843 30.2826H93.4396V33.6963H92.8459ZM101.083 33.7438C100.763 33.7438 100.468 33.6923 100.199 33.5894C99.9297 33.4826 99.6962 33.3341 99.4983 33.1442C99.3004 32.9502 99.1461 32.7246 99.0352 32.4674C98.9244 32.2101 98.869 31.9271 98.869 31.6184C98.869 31.3097 98.9244 31.0267 99.0352 30.7694C99.1461 30.5121 99.3004 30.2885 99.4983 30.0985C99.7002 29.9046 99.9357 29.7562 100.205 29.6533C100.474 29.5464 100.771 29.493 101.095 29.493C101.424 29.493 101.725 29.5464 101.998 29.6533C102.271 29.7601 102.502 29.9204 102.692 30.1342L102.324 30.5022C102.154 30.336 101.968 30.2153 101.766 30.1401C101.568 30.0609 101.353 30.0214 101.119 30.0214C100.882 30.0214 100.66 30.0609 100.454 30.1401C100.252 30.2192 100.076 30.3301 99.9258 30.4726C99.7793 30.615 99.6646 30.7852 99.5814 30.9831C99.5023 31.1771 99.4627 31.3888 99.4627 31.6184C99.4627 31.844 99.5023 32.0557 99.5814 32.2536C99.6646 32.4476 99.7793 32.6178 99.9258 32.7642C100.076 32.9067 100.252 33.0175 100.454 33.0967C100.656 33.1758 100.876 33.2154 101.113 33.2154C101.335 33.2154 101.547 33.1818 101.748 33.1145C101.954 33.0432 102.144 32.9265 102.318 32.7642L102.657 33.2154C102.451 33.3895 102.21 33.5221 101.932 33.6132C101.659 33.7002 101.376 33.7438 101.083 33.7438ZM102.087 33.1382V31.5946H102.657V33.2154L102.087 33.1382ZM109.686 33.7438C109.369 33.7438 109.067 33.6963 108.778 33.6013C108.489 33.5024 108.261 33.3757 108.095 33.2213L108.315 32.7583C108.473 32.8968 108.675 33.0116 108.92 33.1026C109.166 33.1936 109.421 33.2391 109.686 33.2391C109.928 33.2391 110.123 33.2114 110.274 33.156C110.424 33.1006 110.535 33.0254 110.606 32.9304C110.678 32.8315 110.713 32.7207 110.713 32.598C110.713 32.4555 110.666 32.3407 110.571 32.2536C110.48 32.1665 110.359 32.0973 110.209 32.0458C110.062 31.9904 109.9 31.9429 109.722 31.9033C109.544 31.8638 109.364 31.8183 109.181 31.7668C109.003 31.7114 108.839 31.6421 108.689 31.559C108.542 31.4759 108.424 31.3651 108.333 31.2265C108.241 31.0841 108.196 30.902 108.196 30.6803C108.196 30.4666 108.251 30.2707 108.362 30.0926C108.477 29.9105 108.651 29.7661 108.885 29.6592C109.122 29.5484 109.423 29.493 109.787 29.493C110.028 29.493 110.268 29.5246 110.505 29.588C110.743 29.6513 110.949 29.7423 111.123 29.8611L110.927 30.336C110.749 30.2173 110.561 30.1322 110.363 30.0807C110.165 30.0253 109.973 29.9976 109.787 29.9976C109.554 29.9976 109.362 30.0273 109.211 30.0867C109.061 30.146 108.95 30.2252 108.879 30.3241C108.811 30.4231 108.778 30.5339 108.778 30.6566C108.778 30.803 108.823 30.9198 108.914 31.0069C109.009 31.094 109.13 31.1632 109.276 31.2147C109.427 31.2661 109.591 31.3136 109.769 31.3572C109.947 31.3967 110.125 31.4422 110.304 31.4937C110.486 31.5452 110.65 31.6124 110.796 31.6956C110.947 31.7787 111.067 31.8895 111.158 32.028C111.25 32.1665 111.295 32.3447 111.295 32.5623C111.295 32.7721 111.238 32.968 111.123 33.1501C111.008 33.3282 110.83 33.4727 110.589 33.5835C110.351 33.6904 110.05 33.7438 109.686 33.7438ZM113.706 33.6963V29.5405H114.3V33.6963H113.706ZM117.087 33.6963V29.5405H117.574L119.438 32.6811H119.177L121.018 29.5405H121.504L121.51 33.6963H120.94L120.935 30.4369H121.071L119.433 33.1917H119.159L117.509 30.4369H117.657V33.6963H117.087ZM124.301 33.6963V29.5405H125.922C126.286 29.5405 126.597 29.5979 126.854 29.7126C127.111 29.8274 127.309 29.9936 127.448 30.2113C127.586 30.429 127.656 30.6883 127.656 30.9891C127.656 31.2899 127.586 31.5491 127.448 31.7668C127.309 31.9805 127.111 32.1468 126.854 32.2655C126.597 32.3803 126.286 32.4377 125.922 32.4377H124.628L124.895 32.1586V33.6963H124.301ZM124.895 32.218L124.628 31.9212H125.904C126.284 31.9212 126.571 31.84 126.765 31.6777C126.963 31.5155 127.062 31.2859 127.062 30.9891C127.062 30.6922 126.963 30.4627 126.765 30.3004C126.571 30.1381 126.284 30.057 125.904 30.057H124.628L124.895 29.7601V32.218ZM130.071 33.6963V29.5405H130.665V33.1798H132.915V33.6963H130.071ZM135.14 33.6963V29.5405H135.734V33.6963H135.14ZM139.056 31.5056H141.199V32.0161H139.056V31.5056ZM139.115 33.6963H138.521V29.5405H141.454V30.057H139.115V33.6963ZM143.834 33.6963V29.5405H144.427V33.6963H143.834ZM147.755 31.3334H149.893V31.838H147.755V31.3334ZM147.809 33.1798H150.231V33.6963H147.215V29.5405H150.148V30.057H147.809V33.1798ZM152.736 33.6963V29.5405H154.487C154.931 29.5405 155.32 29.6275 155.657 29.8017C155.997 29.9758 156.26 30.2192 156.446 30.5319C156.636 30.8446 156.731 31.2068 156.731 31.6184C156.731 32.03 156.636 32.3922 156.446 32.7048C156.26 33.0175 155.997 33.2609 155.657 33.4351C155.32 33.6092 154.931 33.6963 154.487 33.6963H152.736ZM153.33 33.1798H154.452C154.796 33.1798 155.093 33.1145 155.342 32.9839C155.596 32.8533 155.791 32.6712 155.93 32.4377C156.069 32.2002 156.138 31.9271 156.138 31.6184C156.138 31.3057 156.069 31.0326 155.93 30.7991C155.791 30.5656 155.596 30.3835 155.342 30.2529C155.093 30.1223 154.796 30.057 154.452 30.057H153.33V33.1798Z"
				fill="#E68C16"
			/>
		</svg>
	);
	const searchIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			className="size-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
			/>
		</svg>
	);
	const accountIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			className="size-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
			/>
		</svg>
  );
  
  const cartIcon=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>


	return (
		<div className="sticky top-0 inset-x-0 z-50 group">
			<header className="relative h-16 mx-auto  duration-200 bg-white ">
				<nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
					{/* regions */}

					{/* <SideMenu regions={regions} /> */}

					{/* icon */}
					<div className="flex items-center h-full">
						<LocalizedClientLink
							href="/"
							className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
							data-testid="nav-store-link"
						>
							<span>{siteIcon}</span>
						</LocalizedClientLink>
					</div>

					<div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
						{/* don't know about this  */}

						{/* {process.env.FEATURE_SEARCH_ENABLED && (
								<LocalizedClientLink
									className="hover:text-ui-fg-base "
									href="/search"
									scroll={false}
									data-testid="nav-search-link"
								>
									Search
								</LocalizedClientLink>
            )} */}

						<LocalizedClientLink
							className="hover:text-ui-fg-base"
							href="/search"
							data-testid="nav-search-link"
						>
							{searchIcon}
						</LocalizedClientLink>
						<LocalizedClientLink
							className="hover:text-ui-fg-base"
							href="/account"
							data-testid="nav-account-link"
						>
							{accountIcon}
						</LocalizedClientLink>
						<Suspense
							fallback={
								<LocalizedClientLink
									className="hover:text-ui-fg-base flex gap-2"
									href="/cart"
									data-testid="nav-cart-link"
								>
									{cartIcon}
								</LocalizedClientLink>
							}
						>
							<CartButton />
						</Suspense>
					</div>
				</nav>
			</header>
		</div>
	);
}