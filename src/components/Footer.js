import './Footer.scss'
import COMFooterLogo from '../asset/img/com_footer.png'
import { Link } from 'react-router-dom'

function Footer() {
return(
    <>
        <footer className="footer-clean footer-container">
            <div className="container-md">
                <div className="row justify-content-center">
                    <div className="col-sm-4 col-md-3 item">
                        <div className="mb-3">
                            <img src={COMFooterLogo} />
                        </div>
                        <ul>
                            <li className="body-one">
                                <svg style={{marginRight:"15px"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.9395 3C18.2805 3 19.5705 3.53 20.5195 4.481C21.4695 5.43 22.0005 6.71 22.0005 8.05V15.95C22.0005 18.74 19.7305 21 16.9395 21H7.06049C4.26949 21 2.00049 18.74 2.00049 15.95V8.05C2.00049 5.26 4.25949 3 7.06049 3H16.9395ZM18.5305 9.54L18.6105 9.46C18.8495 9.17 18.8495 8.75 18.5995 8.46C18.4605 8.311 18.2695 8.22 18.0705 8.2C17.8605 8.189 17.6605 8.26 17.5095 8.4L13.0005 12C12.4205 12.481 11.5895 12.481 11.0005 12L6.50049 8.4C6.18949 8.17 5.75949 8.2 5.50049 8.47C5.23049 8.74 5.20049 9.17 5.42949 9.47L5.56049 9.6L10.1105 13.15C10.6705 13.59 11.3495 13.83 12.0605 13.83C12.7695 13.83 13.4605 13.59 14.0195 13.15L18.5305 9.54Z" fill="white"/>
                                </svg>
                                <label>com.youthid@gmail.com</label>
                            </li>
                            <li className="body-one">
                                <svg style={{marginRight:"15px"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.00846 10.6946C5.00846 10.076 5.01591 9.45733 5.02339 8.83581L5.02339 8.8358C5.02719 8.52071 5.03099 8.20488 5.03384 7.88794C5.03384 4.48264 7.16556 1.99982 10.1094 1.99982H13.8906C16.8344 1.99982 18.9662 4.48264 18.9662 7.88794C18.9915 9.25202 19 10.6161 19 11.99C19 13.3639 18.9915 14.7476 18.9662 16.1117C18.9662 19.517 16.8344 21.9998 13.8906 21.9998H10.1094C7.16556 21.9998 5.03384 19.517 5.03384 16.1019C5.01692 14.8163 5 13.5013 5 12.1666L5.00846 10.6946ZM13.28 19.6401V19.8001C13.28 20.4737 12.7168 21.0001 12 21.0001C11.3003 21.0001 10.72 20.4737 10.72 19.8001V19.6401C10.72 18.9841 11.3003 18.4401 12 18.4401C12.7168 18.4401 13.28 18.9841 13.28 19.6401ZM7.01671 8.44346C7.01136 8.84744 7.00604 9.24956 7.00604 9.65168L7 10.6085C7 11.476 7.01208 12.3308 7.02417 13.1664C7.02417 15.3862 8.54683 17.0001 10.6495 17.0001H13.3505C15.4532 17.0001 16.9758 15.3862 16.9758 13.1728C16.994 12.2861 17 11.3867 17 10.4937C17 9.60065 16.994 8.714 16.9758 7.82734C16.9758 5.6139 15.4532 4.00006 13.3505 4.00006H10.6495C8.54683 4.00006 7.02417 5.6139 7.02417 7.82734C7.02214 8.03336 7.01942 8.23865 7.01671 8.44346Z" fill="white"/>
                                </svg>
                                <label>+91 98765 43210</label>
                            </li>
                            <li className="body-one">
                                <svg style={{marginRight:"15px"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.03 2.00002C14.29 2.01002 16.45 2.91002 18.03 4.49002C19.62 6.08002 20.51 8.23002 20.5 10.46V10.51C20.44 13.54 18.74 16.33 16.62 18.51C15.42 19.74 14.09 20.83 12.64 21.75C12.25 22.08 11.68 22.08 11.29 21.75C9.14 20.35 7.24 18.59 5.7 16.54C4.35 14.76 3.58 12.62 3.5 10.39C3.52 5.74002 7.34 1.99002 12.03 2.00002ZM12.03 13.26C12.74 13.26 13.42 12.99 13.92 12.5C14.44 11.99 14.731 11.311 14.731 10.6C14.731 9.12002 13.52 7.93002 12.03 7.93002C10.54 7.93002 9.34 9.12002 9.34 10.6C9.34 12.061 10.52 13.24 12 13.26H12.03Z" fill="white"/>
                                </svg>
                                <label>Indonesia</label>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3 className="body-two">Quick Links</h3>
                        <ul>
                            <li className="body-one hover-orange">
                                <Link to="/structure">Structure</Link>
                            </li>
                            <li className="body-one hover-orange">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="body-one hover-orange">
                                <Link to="/oprec">Open Recruitment</Link>
                            </li>
                            <li className="body-one hover-orange">
                                <Link to="/faq">FAQ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3 className="body-two">Profile</h3>
                        <ul>
                            <li className="body-one">
                                <label>COM</label>
                            </li>
                            <li className="body-one hover-orange">
                                <Link to="/company">Company</Link>
                            </li>
                            <li className="body-one hover-orange">
                                <Link to="/community">Community</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3 className="body-two">Connect With Us</h3>
                        <ul className="d-flex justify-content-start align-items-center">
                            <li>
                                <a href="#" target="_blank" rel="noreferrer">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="white"/>
                                        <path d="M30.3989 16.467C30.1829 16.467 29.9939 16.548 29.8319 16.71C29.6699 16.845 29.5889 17.061 29.5889 17.277C29.5889 17.493 29.6699 17.682 29.8319 17.844C30.1289 18.141 30.6959 18.141 30.9929 17.844C31.1549 17.709 31.2359 17.493 31.2359 17.25C31.2359 17.061 31.1279 16.845 30.9929 16.71C30.8309 16.548 30.6149 16.467 30.3989 16.467Z" fill="#E9E9E9"/>
                                        <path d="M24.0809 19.68C21.6779 19.68 19.7339 21.624 19.7339 24.027C19.7339 26.43 21.6779 28.374 24.0809 28.374C26.4569 28.374 28.4009 26.43 28.4009 24.027C28.4009 21.624 26.4569 19.68 24.0809 19.68Z" fill="#E9E9E9"/>
                                        <path d="M28.8058 12.39H19.3288C15.5218 12.39 12.4438 15.468 12.4438 19.275V28.779C12.4438 32.586 15.5218 35.664 19.3288 35.664H28.8328C32.6398 35.664 35.7178 32.586 35.7178 28.779V19.275C35.6908 15.468 32.6128 12.39 28.8058 12.39ZM24.0808 29.724C20.9488 29.724 18.3838 27.159 18.3838 24.027C18.3838 20.895 20.9488 18.33 24.0808 18.33C27.1858 18.33 29.7509 20.895 29.7509 24.027C29.7509 27.159 27.2128 29.724 24.0808 29.724ZM32.6129 17.304C32.5858 17.898 32.3428 18.438 31.9648 18.816C31.5598 19.221 31.0198 19.437 30.4258 19.437C29.8319 19.437 29.2918 19.221 28.8868 18.816C28.4818 18.411 28.2658 17.871 28.2658 17.277C28.2658 16.683 28.4818 16.143 28.8868 15.738C29.2918 15.333 29.8319 15.117 30.4258 15.117C31.0198 15.117 31.5868 15.36 31.9918 15.792C32.3698 16.17 32.6129 16.71 32.6129 17.277V17.304Z" fill="#E9E9E9"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noreferrer">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="white"/>
                                        <path d="M33.665 14.335C31.1919 11.8618 27.9044 10.5 24.4066 10.5C22.6767 10.5002 20.9896 10.8352 19.395 11.4958C17.8002 12.1564 16.3714 13.1116 15.148 14.335C12.6751 16.8079 11.3133 20.096 11.3133 23.5934C11.3133 25.679 11.8165 27.7518 12.7701 29.5985L10.5692 35.8858C10.4141 36.3293 10.5239 36.8114 10.8564 37.1436C11.0889 37.3764 11.395 37.5 11.7098 37.5C11.8447 37.5 12.9346 37.1436 12.1142 37.4308L18.4015 35.2301C20.2482 36.1837 22.3209 36.6869 24.4066 36.6869C27.904 36.6869 31.1919 35.3249 33.665 32.852C36.138 30.379 37.5 27.0909 37.5 23.5936C37.5 20.096 36.1382 16.8079 33.665 14.335ZM31.0479 28.7232L29.6277 30.1433C29.2007 30.5704 28.6124 30.7844 27.9003 30.7844C27.2557 30.7844 26.5098 30.6091 25.6898 30.2577C24.1912 29.6154 22.544 28.44 21.052 26.948C19.56 25.456 18.3846 23.8088 17.7423 22.3102C17.0026 20.5844 17.0432 19.1857 17.8567 18.3723L19.2768 16.9521C19.8791 16.3498 20.8592 16.3498 21.4615 16.9521L23.2368 18.7274C23.8393 19.3297 23.8393 20.3098 23.2368 20.9124L22.578 21.5711C23.4696 23.2069 24.7933 24.5304 26.4291 25.422L27.0878 24.7632C27.6902 24.1607 28.6703 24.1607 29.2726 24.7632L31.0479 26.5385C31.3398 26.8301 31.5004 27.2182 31.5004 27.6308C31.5004 28.0434 31.3398 28.4313 31.0479 28.7232Z" fill="#E9E9E9"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noreferrer">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="white"/>
                                        <g clipPath="url(#clip0)">
                                        <path d="M37.4372 20.6483L37.4374 20.6482L37.4291 20.579C37.429 20.5778 37.4289 20.5769 37.4287 20.5757C37.4286 20.5747 37.4285 20.5738 37.4283 20.5728L37.397 20.3126C37.3907 20.2603 37.3835 20.2008 37.3753 20.1329L37.3688 20.0788L37.3554 20.0804C37.0261 18.2073 36.1213 16.4298 34.7201 14.912C33.3254 13.4015 31.5135 12.2089 29.4802 11.4631C27.738 10.8241 25.8895 10.5 23.9862 10.5C21.4167 10.5 18.9212 11.1043 16.7696 12.2476C12.6205 14.4521 10.1736 18.5042 10.5352 22.5708C10.7224 24.6752 11.5468 26.6783 12.9194 28.3638C14.2113 29.9502 15.9588 31.2304 17.9731 32.066C19.2117 32.5797 20.4362 32.8218 21.7328 33.0782L21.8846 33.1082C22.2416 33.1789 22.3376 33.2759 22.3624 33.3143C22.4082 33.3857 22.3842 33.5264 22.3658 33.6039C22.3489 33.6754 22.3314 33.7467 22.3139 33.8181C22.1747 34.3858 22.0308 34.9729 22.1439 35.6202C22.2739 36.3643 22.7385 36.7911 23.4187 36.7911C23.4188 36.7911 23.4188 36.7911 23.4189 36.7911C24.1505 36.7911 24.9832 36.3004 25.5342 35.9757L25.6077 35.9324C26.9222 35.1605 28.1605 34.2897 29.0924 33.6174C31.1318 32.146 33.4433 30.4783 35.1762 28.3208C36.9212 26.1478 37.7433 23.3554 37.4372 20.6483ZM18.9082 24.7652H16.5788C16.2268 24.7652 15.9415 24.4799 15.9415 24.1278V19.2386C15.9415 18.8866 16.2268 18.6012 16.5788 18.6012C16.9308 18.6012 17.2162 18.8866 17.2162 19.2386V23.4905H18.9081C19.2601 23.4905 19.5455 23.7758 19.5455 24.1278C19.5455 24.4799 19.2602 24.7652 18.9082 24.7652ZM21.3381 24.1105C21.3381 24.4626 21.0528 24.7479 20.7007 24.7479C20.3487 24.7479 20.0634 24.4626 20.0634 24.1105V19.2213C20.0634 18.8693 20.3487 18.5839 20.7007 18.5839C21.0528 18.5839 21.3381 18.8693 21.3381 19.2213V24.1105ZM27.0995 24.1105C27.0995 24.3867 26.9216 24.6315 26.6589 24.7168C26.5941 24.7378 26.5277 24.748 26.4622 24.748C26.2619 24.748 26.0686 24.6534 25.9463 24.485L23.6511 21.3239V24.1106C23.6511 24.4626 23.3657 24.748 23.0137 24.748C22.6617 24.748 22.3763 24.4626 22.3763 24.1106V19.3613C22.3763 19.0851 22.5541 18.8403 22.8168 18.755C23.0796 18.6698 23.3673 18.7632 23.5295 18.9868L25.8247 22.1479V19.2213C25.8247 18.8693 26.1101 18.5839 26.4621 18.5839C26.8141 18.5839 27.0995 18.8693 27.0995 19.2213V24.1105ZM31.7438 24.6476H28.5893C28.2373 24.6476 27.9519 24.3622 27.9519 24.0102V21.5657V19.121C27.9519 18.769 28.2373 18.4836 28.5893 18.4836H31.646C31.998 18.4836 32.2833 18.769 32.2833 19.121C32.2833 19.473 31.998 19.7583 31.646 19.7583H29.2267V20.9283H31.19C31.542 20.9283 31.8273 21.2137 31.8273 21.5657C31.8273 21.9177 31.542 22.2031 31.19 22.2031H29.2267V23.3728H31.7438C32.0959 23.3728 32.3812 23.6582 32.3812 24.0102C32.3812 24.3622 32.0959 24.6476 31.7438 24.6476Z" fill="#E9E9E9"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0">
                                        <rect width="27" height="27" fill="white" transform="translate(10.5 10.5)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-5 d-flex justify-content-start align-items-center">
                    <p className="body-three">© 2021 COM All rights reserved</p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer