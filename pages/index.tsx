import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "../styles/index.module.css";

const LandingPage: NextPage = () => {
  const onTodaySpecialOffersClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='loremIpsumIs']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onOurMenuTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='menuThatAlways']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.landingPageDiv}>
      <img className={styles.vectorIcon} alt="" src="vector-10.svg" />
      <img className={styles.groupIcon} alt="" src="group-8441.svg" />
      <img className={styles.ellipseIcon} alt="" src="ellipse-44.svg" />
      <img
        className={styles.unsplashjWU9FpLW7fIIcon}
        alt=""
        src="unsplashjwu9fplw7fi@2x.png"
      />
      <img className={styles.rosemaryIcon} alt="" src="rosemary.svg" />
      <img className={styles.groupIcon1} alt="" src="group-8438.svg" />
      <div className={styles.rectangleDiv} />
      <img className={styles.ellipseIcon1} alt="" src="ellipse-42.svg" />
      <div className={styles.frameDiv}>
        <div
          className={styles.todaySpecialOffers}
          onClick={onTodaySpecialOffersClick}
        >
          Today special offers
        </div>
        <div className={styles.whyFoodHutDiv}>Why FoodHut</div>
        <div className={styles.todaySpecialOffers} onClick={onOurMenuTextClick}>
          Our Menu
        </div>
        <div className={styles.whyFoodHutDiv}>Our Popular food</div>
      </div>
      <img className={styles.polygonIcon} alt="" src="polygon-1.svg" />
      <img className={styles.vectorIcon1} alt="" src="vector-3.svg" />
      <img className={styles.ellipseIcon2} alt="" src="ellipse-441.svg" />
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv1} />
        <div className={styles.downlodeAppDiv}>Downlode App</div>
      </div>
      <div className={styles.groupDiv1}>
        <div className={styles.rectangleDiv1} />
        <div className={styles.downlodeAppDiv}>Downlode App</div>
      </div>
      <div className={styles.bestCooksAndBestDeliveryG}>
        Best cooks and best delivery guys all at your service. Hot tasty food
        will reach you in 60 minutes.
      </div>
      <div className={styles.wereSeriousForFoodDeliv}>
        <span>We're </span>
        <span className={styles.seriousSpan}>Serious</span>
        <span> For </span>
        <span className={styles.seriousSpan}>Food</span>
        <span>{` & `}</span>
        <span className={styles.deliverySpan}>Delivery</span>
        <span>.</span>
      </div>
      <img className={styles.logoIcon} alt="" src="logo.svg" />
      <div className={styles.groupDiv2}>
        <div className={styles.rectangleDiv3} />
        <div className={styles.peopleTrustUs}>People Trust us</div>
        <img className={styles.groupIcon2} alt="" src="group-8426.svg" />
      </div>
      <img className={styles.groupIcon3} alt="" src="group-8429.svg" />
      <img className={styles.vectorIcon2} alt="" src="vector-2.svg" />
      <img className={styles.arrow1Stroke} alt="" src="arrow-1-stroke.svg" />
      <img className={styles.orangeIcon} alt="" src="orange.svg" />
      <div className={styles.rectangleDiv4} />
      <img className={styles.decoreIcon} alt="" src="decore.svg" />
      <div className={styles.searchFoodDiv}>Search food</div>
      <img className={styles.bxbxSearchIcon} alt="" src="bxbxsearch.svg" />
      <img className={styles.groupIcon4} alt="" src="group-8430.svg" />
      <img className={styles.emojionefireIcon} alt="" src="emojionefire.svg" />
      <img className={styles.mintIcon} alt="" src="-mint.svg" />
      <img className={styles.groupIcon5} alt="" src="group-8431.svg" />
      <img className={styles.groupIcon6} alt="" src="group-8432.svg" />
      <img className={styles.groupIcon7} alt="" src="group-8433.svg" />
      <img className={styles.cardIcon} alt="" src="card.svg" />
      <img
        className={styles.mealPNGDownloadImage2Icon}
        alt=""
        src="mealpngdownloadimage-2@2x.png"
      />
      <img className={styles.pngfind1Icon} alt="" src="pngfind-1@2x.png" />
      <img
        className={styles.mealPNGDownloadImage1Icon}
        alt=""
        src="mealpngdownloadimage-1@2x.png"
      />
      <img
        className={styles.t4gag1e6fmeokhs7mt3g58vhbt1Icon}
        alt=""
        src="t4gag1e6fmeokhs7mt3g58vhbt-1@2x.png"
      />
      <div className={styles.playDemoDiv}>
        <div className={styles.watchVideoDiv}>Watch Video</div>
        <img className={styles.playButtonIcon} alt="" src="play-button.svg" />
      </div>
      <img className={styles.seekPngIcon} alt="" src="seekpng@2x.png" />
      <img className={styles.sliderIcon} alt="" src="slider.svg" />
      <b className={styles.todaySpecialOffers1}>
        <span>Today </span>
        <span className={styles.seriousSpan}>special</span>
        <span> offers</span>
      </b>
      <b
        className={styles.menuThatAlwaysMakeYouFall}
        data-scroll-to="menuThatAlways"
      >
        <span>Menu</span>
        <span className={styles.thatSpan}> that </span>
        <span className={styles.deliverySpan}>always</span>
        <span className={styles.thatSpan}> make you fall in </span>
        <span>love</span>
      </b>
      <div
        className={styles.loremIpsumIsSimplyDummyTe}
        data-scroll-to="loremIpsumIs"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </div>
      <img className={styles.decoreIcon1} alt="" src="decore1.svg" />
      <div className={styles.groupDiv3}>
        <div className={styles.rectangleDiv5} />
        <div className={styles.downlodeAppDiv}>About Us</div>
      </div>
      <b className={styles.weAreMoreThanMultipleServ}>
        <span>We are </span>
        <span className={styles.seriousSpan}>more</span>
        <span> than </span>
        <span className={styles.deliverySpan}>multiple</span>
        <span> service</span>
      </b>
      <div className={styles.thisIsATypeOfResturentWh}>
        This is a type of resturent which typically serves food and drink, in
        addition to light refreshments such as baked goods or snacks. The term
        comes frome the rench word meaning food
      </div>
      <img className={styles.vectorIcon3} alt="" src="vector-9.svg" />
      <div className={styles.onlineOrderDiv}>Online Order</div>
      <div className={styles.preReservationDiv}>Pre-Reservation</div>
      <div className={styles.superChefDiv}>Super Chef</div>
      <div className={styles.cleanKitchenDiv}>Clean Kitchen</div>
      <div className={styles.oragonizedFoodhutPlace}>
        Oragonized Foodhut Place
      </div>
      <div className={styles.serviceDiv}>24/7 Service</div>
      <img className={styles.image15Icon} alt="" src="image-15@2x.png" />
      <img className={styles.image17Icon} alt="" src="image-17@2x.png" />
      <img className={styles.image18Icon} alt="" src="image-18@2x.png" />
      <img className={styles.image20Icon} alt="" src="image-18@2x.png" />
      <img className={styles.image21Icon} alt="" src="image-18@2x.png" />
      <img className={styles.image19Icon} alt="" src="image-18@2x.png" />
      <img className={styles.groupIcon8} alt="" src="group-8472.svg" />
      <div className={styles.groupDiv4}>
        <div className={styles.rectangleDiv6} />
        <div className={styles.groupDiv5}>
          <img className={styles.groupIcon9} alt="" src="group-8442.svg" />
          <div className={styles.groupDiv6}>
            <img className={styles.starIcon} alt="" src="star-7.svg" />
            <div className={styles.div}>(4.5)</div>
          </div>
        </div>
        <div className={styles.kebabDiv}>Kebab</div>
        <div className={styles.loremIpsumIsSimplyDummyTe1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </div>
        <div className={styles.groupDiv7}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.downlodeAppDiv}>Order Now</div>
        </div>
        <div className={styles.groupDiv8}>
          <div className={styles.groupDiv9}>
            <img
              className={styles.unsplashUC0HZdUitWYIcon}
              alt=""
              src="unsplashuc0hzduitwy@2x.png"
            />
            <div className={styles.groupDiv10}>
              <img
                className={styles.ellipseIcon3}
                alt=""
                src="ellipse-56.svg"
              />
              <div className={styles.div1}>10$</div>
            </div>
          </div>
          <img className={styles.ellipseIcon4} alt="" src="ellipse-57.svg" />
        </div>
      </div>
      <div className={styles.groupDiv11}>
        <div className={styles.rectangleDiv6} />
        <div className={styles.groupDiv5}>
          <img className={styles.groupIcon9} alt="" src="group-84421.svg" />
          <div className={styles.groupDiv6}>
            <img className={styles.starIcon} alt="" src="star-71.svg" />
            <div className={styles.div}>(4.5)</div>
          </div>
        </div>
        <div className={styles.kebabDiv}>Kebab</div>
        <div className={styles.loremIpsumIsSimplyDummyTe1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </div>
        <div className={styles.groupDiv7}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.downlodeAppDiv}>Order Now</div>
        </div>
        <div className={styles.groupDiv8}>
          <div className={styles.groupDiv9}>
            <img
              className={styles.unsplashUC0HZdUitWYIcon}
              alt=""
              src="unsplashuc0hzduitwy1@2x.png"
            />
            <div className={styles.groupDiv10}>
              <img
                className={styles.ellipseIcon3}
                alt=""
                src="ellipse-561.svg"
              />
              <div className={styles.div1}>10$</div>
            </div>
          </div>
          <img className={styles.ellipseIcon4} alt="" src="ellipse-571.svg" />
        </div>
      </div>
      <div className={styles.frameDiv1}>
        <div className={styles.frameDiv2}>
          <div className={styles.whyFoodHutDiv}>Ramen</div>
        </div>
        <div className={styles.frameDiv3}>
          <div className={styles.breakfastDiv}>Breakfast</div>
        </div>
        <div className={styles.frameDiv3}>
          <div className={styles.breakfastDiv}>Lunch</div>
        </div>
        <div className={styles.frameDiv3}>
          <div className={styles.breakfastDiv}>Dinner</div>
        </div>
        <div className={styles.frameDiv3}>
          <div className={styles.breakfastDiv}>Maxican</div>
        </div>
        <div className={styles.frameDiv3}>
          <div className={styles.breakfastDiv}>Italian</div>
        </div>
        <div className={styles.frameDiv3}>
          <div className={styles.breakfastDiv}>Desserts</div>
        </div>
        <div className={styles.frameDiv3}>
          <div className={styles.breakfastDiv}>Drinks</div>
        </div>
      </div>
      <div className={styles.groupDiv18}>
        <div className={styles.rectangleDiv6} />
        <div className={styles.groupDiv5}>
          <img className={styles.groupIcon9} alt="" src="group-84422.svg" />
          <div className={styles.groupDiv6}>
            <img className={styles.starIcon} alt="" src="star-71.svg" />
            <div className={styles.div}>(4.5)</div>
          </div>
        </div>
        <div className={styles.kebabDiv}>Kebab</div>
        <div className={styles.loremIpsumIsSimplyDummyTe1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </div>
        <div className={styles.groupDiv7}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.downlodeAppDiv}>Order Now</div>
        </div>
        <div className={styles.groupDiv8}>
          <div className={styles.groupDiv9}>
            <img
              className={styles.unsplashUC0HZdUitWYIcon}
              alt=""
              src="unsplashuc0hzduitwy2@2x.png"
            />
            <div className={styles.groupDiv10}>
              <img
                className={styles.ellipseIcon3}
                alt=""
                src="ellipse-561.svg"
              />
              <div className={styles.div1}>10$</div>
            </div>
          </div>
          <img className={styles.ellipseIcon4} alt="" src="ellipse-572.svg" />
        </div>
      </div>
      <div className={styles.groupDiv25}>
        <div className={styles.rectangleDiv6} />
        <div className={styles.groupDiv5}>
          <img className={styles.groupIcon9} alt="" src="group-84423.svg" />
          <div className={styles.groupDiv6}>
            <img className={styles.starIcon} alt="" src="star-7.svg" />
            <div className={styles.div}>(4.8)</div>
          </div>
        </div>
        <div className={styles.chickenTikkaDiv}>Chicken Tikka</div>
        <div className={styles.loremIpsumIsSimplyDummyTe1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </div>
        <div className={styles.groupDiv7}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.downlodeAppDiv}>Order Now</div>
        </div>
        <div className={styles.groupDiv8}>
          <div className={styles.groupDiv9}>
            <img
              className={styles.unsplashUC0HZdUitWYIcon}
              alt=""
              src="unsplashuc0hzduitwy3@2x.png"
            />
            <div className={styles.groupDiv10}>
              <img
                className={styles.ellipseIcon3}
                alt=""
                src="ellipse-563.svg"
              />
              <div className={styles.div7}>15$</div>
            </div>
          </div>
          <img className={styles.ellipseIcon4} alt="" src="ellipse-573.svg" />
        </div>
      </div>
      <div className={styles.groupDiv32}>
        <div className={styles.rectangleDiv6} />
        <div className={styles.groupDiv5}>
          <img className={styles.groupIcon9} alt="" src="group-84424.svg" />
          <div className={styles.groupDiv6}>
            <img className={styles.starIcon} alt="" src="star-71.svg" />
            <div className={styles.div}>(4.5)</div>
          </div>
        </div>
        <div className={styles.kebabDiv}>Kebab</div>
        <div className={styles.loremIpsumIsSimplyDummyTe1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </div>
        <div className={styles.groupDiv7}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.downlodeAppDiv}>Order Now</div>
        </div>
        <div className={styles.groupDiv8}>
          <div className={styles.groupDiv9}>
            <img
              className={styles.unsplashUC0HZdUitWYIcon}
              alt=""
              src="unsplashuc0hzduitwy4@2x.png"
            />
            <div className={styles.groupDiv10}>
              <img
                className={styles.ellipseIcon3}
                alt=""
                src="ellipse-564.svg"
              />
              <div className={styles.div1}>10$</div>
            </div>
          </div>
          <img className={styles.ellipseIcon4} alt="" src="ellipse-574.svg" />
        </div>
      </div>
      <div className={styles.groupDiv39}>
        <div className={styles.rectangleDiv6} />
        <div className={styles.groupDiv5}>
          <img className={styles.groupIcon9} alt="" src="group-84425.svg" />
          <div className={styles.groupDiv6}>
            <img className={styles.starIcon} alt="" src="star-71.svg" />
            <div className={styles.div}>(4.5)</div>
          </div>
        </div>
        <div className={styles.kebabDiv}>Kebab</div>
        <div className={styles.loremIpsumIsSimplyDummyTe1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </div>
        <div className={styles.groupDiv7}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.downlodeAppDiv}>Order Now</div>
        </div>
        <div className={styles.groupDiv8}>
          <div className={styles.groupDiv9}>
            <img
              className={styles.unsplashUC0HZdUitWYIcon}
              alt=""
              src="unsplashuc0hzduitwy5@2x.png"
            />
            <div className={styles.groupDiv10}>
              <img
                className={styles.ellipseIcon3}
                alt=""
                src="ellipse-564.svg"
              />
              <div className={styles.div1}>10$</div>
            </div>
          </div>
          <img className={styles.ellipseIcon4} alt="" src="ellipse-575.svg" />
        </div>
      </div>
      <div className={styles.groupDiv46}>
        <div className={styles.rectangleDiv6} />
        <div className={styles.groupDiv5}>
          <img className={styles.groupIcon9} alt="" src="group-84426.svg" />
          <div className={styles.groupDiv6}>
            <img className={styles.starIcon} alt="" src="star-7.svg" />
            <div className={styles.div}>(4.2)</div>
          </div>
        </div>
        <div className={styles.desiChowmeinDiv}>Desi Chowmein</div>
        <div className={styles.loremIpsumIsSimplyDummyTe1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </div>
        <div className={styles.groupDiv7}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.downlodeAppDiv}>Order Now</div>
        </div>
        <div className={styles.groupDiv8}>
          <div className={styles.groupDiv9}>
            <img
              className={styles.unsplashUC0HZdUitWYIcon}
              alt=""
              src="unsplashuc0hzduitwy6@2x.png"
            />
            <div className={styles.groupDiv10}>
              <img
                className={styles.ellipseIcon3}
                alt=""
                src="ellipse-563.svg"
              />
              <div className={styles.div13}>8$</div>
            </div>
          </div>
          <img className={styles.ellipseIcon4} alt="" src="ellipse-576.svg" />
        </div>
      </div>
      <div className={styles.groupDiv53}>
        <div className={styles.rectangleDiv6} />
        <div className={styles.groupDiv5}>
          <img className={styles.groupIcon9} alt="" src="group-84427.svg" />
          <div className={styles.groupDiv6}>
            <img className={styles.starIcon} alt="" src="star-71.svg" />
            <div className={styles.div}>(4.5)</div>
          </div>
        </div>
        <div className={styles.kebabDiv}>Kebab</div>
        <div className={styles.loremIpsumIsSimplyDummyTe1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </div>
        <div className={styles.groupDiv7}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.downlodeAppDiv}>Order Now</div>
        </div>
        <div className={styles.groupDiv8}>
          <div className={styles.groupDiv9}>
            <img
              className={styles.unsplashUC0HZdUitWYIcon}
              alt=""
              src="unsplashuc0hzduitwy7@2x.png"
            />
            <div className={styles.groupDiv10}>
              <img
                className={styles.ellipseIcon3}
                alt=""
                src="ellipse-564.svg"
              />
              <div className={styles.div1}>10$</div>
            </div>
          </div>
          <img className={styles.ellipseIcon4} alt="" src="ellipse-577.svg" />
        </div>
      </div>
      <div className={styles.groupDiv60}>
        <div className={styles.rectangleDiv6} />
        <div className={styles.groupDiv5}>
          <img className={styles.groupIcon9} alt="" src="group-84428.svg" />
          <div className={styles.groupDiv6}>
            <img className={styles.starIcon} alt="" src="star-71.svg" />
            <div className={styles.div}>(4.5)</div>
          </div>
        </div>
        <div className={styles.kebabDiv}>Kebab</div>
        <div className={styles.loremIpsumIsSimplyDummyTe1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </div>
        <div className={styles.groupDiv7}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.downlodeAppDiv}>Order Now</div>
        </div>
        <div className={styles.groupDiv8}>
          <div className={styles.groupDiv9}>
            <img
              className={styles.unsplashUC0HZdUitWYIcon}
              alt=""
              src="unsplashuc0hzduitwy8@2x.png"
            />
            <div className={styles.groupDiv10}>
              <img
                className={styles.ellipseIcon3}
                alt=""
                src="ellipse-564.svg"
              />
              <div className={styles.div1}>10$</div>
            </div>
          </div>
          <img className={styles.ellipseIcon4} alt="" src="ellipse-578.svg" />
        </div>
      </div>
      <div className={styles.groupDiv67}>
        <div className={styles.rectangleDiv6} />
        <div className={styles.groupDiv68}>
          <img className={styles.groupIcon9} alt="" src="group-84429.svg" />
          <div className={styles.groupDiv69}>
            <img className={styles.starIcon} alt="" src="star-7.svg" />
            <div className={styles.div}>(5.0)</div>
          </div>
        </div>
        <div className={styles.chickenCharghaDiv}>Chicken Chargha</div>
        <div className={styles.loremIpsumIsSimplyDummyTe1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </div>
        <div className={styles.groupDiv7}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.downlodeAppDiv}>Order Now</div>
        </div>
        <div className={styles.groupDiv8}>
          <div className={styles.groupDiv9}>
            <img
              className={styles.unsplashUC0HZdUitWYIcon}
              alt=""
              src="unsplashuc0hzduitwy9@2x.png"
            />
            <div className={styles.groupDiv10}>
              <img
                className={styles.ellipseIcon3}
                alt=""
                src="ellipse-563.svg"
              />
              <div className={styles.div19}>28$</div>
            </div>
          </div>
          <img className={styles.ellipseIcon4} alt="" src="ellipse-579.svg" />
        </div>
      </div>
      <div className={styles.groupDiv74}>
        <div className={styles.rectangleDiv6} />
        <div className={styles.groupDiv5}>
          <img className={styles.groupIcon9} alt="" src="group-844210.svg" />
          <div className={styles.groupDiv6}>
            <img className={styles.starIcon} alt="" src="star-71.svg" />
            <div className={styles.div}>(4.5)</div>
          </div>
        </div>
        <div className={styles.kebabDiv}>Kebab</div>
        <div className={styles.loremIpsumIsSimplyDummyTe1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </div>
        <div className={styles.groupDiv7}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.downlodeAppDiv}>Order Now</div>
        </div>
        <div className={styles.groupDiv8}>
          <div className={styles.groupDiv9}>
            <img
              className={styles.unsplashUC0HZdUitWYIcon}
              alt=""
              src="unsplashuc0hzduitwy10@2x.png"
            />
            <div className={styles.groupDiv10}>
              <img
                className={styles.ellipseIcon3}
                alt=""
                src="ellipse-564.svg"
              />
              <div className={styles.div1}>10$</div>
            </div>
          </div>
          <img className={styles.ellipseIcon4} alt="" src="ellipse-5710.svg" />
        </div>
      </div>
      <div className={styles.groupDiv81}>
        <div className={styles.rectangleDiv6} />
        <div className={styles.groupDiv5}>
          <img className={styles.groupIcon9} alt="" src="group-844211.svg" />
          <div className={styles.groupDiv6}>
            <img className={styles.starIcon} alt="" src="star-71.svg" />
            <div className={styles.div}>(4.5)</div>
          </div>
        </div>
        <div className={styles.kebabDiv}>Kebab</div>
        <div className={styles.loremIpsumIsSimplyDummyTe1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </div>
        <div className={styles.groupDiv7}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.downlodeAppDiv}>Order Now</div>
        </div>
        <div className={styles.groupDiv8}>
          <div className={styles.groupDiv9}>
            <img
              className={styles.unsplashUC0HZdUitWYIcon}
              alt=""
              src="unsplashuc0hzduitwy11@2x.png"
            />
            <div className={styles.groupDiv10}>
              <img
                className={styles.ellipseIcon3}
                alt=""
                src="ellipse-564.svg"
              />
              <div className={styles.div1}>10$</div>
            </div>
          </div>
          <img className={styles.ellipseIcon4} alt="" src="ellipse-5711.svg" />
        </div>
      </div>
      <img className={styles.groupIcon21} alt="" src="group.svg" />
      <div className={styles.footerDiv}>
        <img className={styles.rectangleIcon} alt="" src="rectangle-6.svg" />
        <div className={styles.logoDiv}>
          <img
            className={styles.socialMediaIcon}
            alt=""
            src="social-media.svg"
          />
          <div className={styles.loremIpsumDolorSitAmetCo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor{" "}
          </div>
          <div className={styles.logoDiv1}>
            <div className={styles.foodhutDiv}>Foodhut</div>
          </div>
        </div>
        <div className={styles.aboutUsDiv1}>
          <div className={styles.aboutUsDiv2}>About Us</div>
          <div className={styles.serviceUsDiv}>Service Us</div>
          <div className={styles.contactDiv}>Contact</div>
          <div className={styles.companyDiv}>Company</div>
          <div className={styles.aboutUsDiv3}>About Us</div>
        </div>
        <div className={styles.companyDiv1}>
          <div className={styles.partnershipDiv}>Partnership</div>
          <div className={styles.termsOfUse}>Terms of Use</div>
          <div className={styles.privacyDiv}>Privacy</div>
          <div className={styles.sitemapDiv}>Sitemap</div>
          <div className={styles.aboutUsDiv3}>Company</div>
        </div>
        <div className={styles.getInTouch}>
          <div className={styles.loremIpsumDolorSitAmetCo1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </div>
          <div className={styles.getInTouch1}>Get in touch</div>
          <div className={styles.buttonDiv}>
            <img
              className={styles.rectangleIcon1}
              alt=""
              src="rectangle-1.svg"
            />
            <div className={styles.textIcon}>
              <div className={styles.subscribeDiv}>Subscribe</div>
            </div>
          </div>
          <div className={styles.groupDiv88}>
            <img
              className={styles.rectangleIcon2}
              alt=""
              src="rectangle-10.svg"
            />
            <div className={styles.emailDiv}>Email</div>
          </div>
        </div>
        <div className={styles.copyright2022Foodhut}>
          Copyright © 2022 Foodhut.
        </div>
      </div>
      <div className={styles.frameDiv10}>
        <div className={styles.rectangleDiv30} />
        <img className={styles.groupIcon22} alt="" src="group-8463.svg" />
        <b className={styles.itsNowMoreEasyToOrderBy}>
          <span>It’s Now </span>
          <span className={styles.seriousSpan}>More Easy</span>
          <span> to </span>
          <span className={styles.deliverySpan}>Order</span>
          <span> by Our Mobile </span>
          <span className={styles.seriousSpan}>App</span>
        </b>
        <div className={styles.allYouNeedToDoIsDownlode}>
          All you need to do is downlode one of the best delivery apps, make a
          and most companies are opting for mobile app devlopment for food
          delivery
        </div>
        <img
          className={styles.a3ac62578a9f8Icon}
          alt=""
          src="5a3ac62578a9f8@2x.png"
        />
        <img className={styles.seekPngIcon1} alt="" src="seekpng1@2x.png" />
        <img
          className={styles.mobileAppStoreBadge}
          alt=""
          src="mobile-app-store-badge.svg"
        />
        <img
          className={styles.mobileAppStoreBadge1}
          alt=""
          src="mobile-app-store-badge1.svg"
        />
      </div>
    </div>
  );
};

export default LandingPage;
