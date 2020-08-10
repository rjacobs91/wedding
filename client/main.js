/**
 * Main entry point for the client application.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Sticky from 'react-stickynode';

import Menu from './components/Menu.component';
import RSVPForm from './components/RSVPForm.component';
import SecretTooltip from './components/SecretTooltip.component';
import TitleBar from './components/TitleBar.component';
import TopicContainer from './components/TopicContainer.component';

const websiteContent = (
    <div>

      <TitleBar id="titlebar">
      </TitleBar>

      <div style={{height: '200px'}}/>

      <Sticky enabled={true}>
        <Menu id="menu"
              items={[{label: 'THE BRIDE & GROOM', href: 'brideandgroom'},
                {label: 'THE WEDDING', href: 'wedding'},
                {label: 'RSVP', href: 'rsvp'},
                {label: 'LOGISTICS', href: 'logistics'},
                {label: 'THINGS TO DO', href: 'thingstodo'},
                {label: 'GIFTS', href: 'gifts'}]}>
        </Menu>
      </Sticky>

      <TopicContainer id="brideandgroom" name="brideandgroom"
                      title="The Bride and Groom">
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <p>
                <a href="img/katie-baby.jpg">
                  <img className="thumbnail" src="img/katie-baby.jpg" alt="Katie"/>
                </a>
                Katie is an adventurous and thoughtful woman, who is as friendly
                as she is bossy! Exciting as it is to be raised in the Derbyshire
                Peak District, Katie made it her mission to live and explore as
                much of the world as she could. Eagerly she set off to teach English
                in China, followed by working in a Human Rights organisation in Cambodia.
                After the culture shock of South East Asia Katie made her way
                through the diverse streets of London where she met Russell,
                finally returning to leisurely ways of Derby. While Katie was
                working in London at a Law firm she would reminisce about her
                time in China realizing her passion in life, she knew her dream
                job was to inspire the next generation as a teacher.
              </p>
            </div>

            <div className="one-half column">
              <p>
                <a href="img/kal-baby.jpg"><img className="thumbnail"
                                                src="img/kal-baby.jpg"
                                                alt="Kal"/></a>
                Kal is a burly and impatient Eastern European. He moved from his
                homeland Bulgaria to the lovely city of Toronto at the young and
                tender age of 22. Kal then found himself in the IT mecca of
                Seattle and realized after 9 years of the beautiful mountain
                backdrop
                and serene lakes that he needs to escape to the center of the
                universe, New York.
              </p>
            </div>
          </div>
        </div>

        <hr/>

        <p>
          <img className="large-image" src="img/proposal.jpg"
               alt="Kal Proposing To Jocelyn"/>
        </p>

        <h2>OUR STORY</h2>
        <p>
          Being children of the modern day and age, our story began with
          venturing onto Tinder. As hesitant as Katie was to engage
          herself with a complete stranger online (while Russell happily
          explored with enthusiasm), on our first date it became quickly
          apparent that we met the natural occurrences when 2 people meet and
          all feelings of the unknown disappeared because at that moment
          right in front of me I was meeting my best friend. As the cliche tale
          goes, the rest is history.
        </p>
      </TopicContainer>

      <TopicContainer id="wedding" title="Wedding">
        <div className="container">
          <h2>VENUE - SHOTTLE HALL</h2>
          <p>
            <img className="large-image" src="img/shottle-hall.jpg"
                 alt="Shottle Hall"/>
          </p>
          <p>The Shottle Hall Estate is nestled amongst rolling hills and offers
            stunning countryside views. Shottle Hall stands on the edge of Peak
            District National Park and forms part of the famous Chatsworth House
            Estate.
          </p>

          <hr/>

          <div className="row">
            <div className="one-half column">
              <h2>CEREMONY</h2>
              <p>15:00</p>
              <p>
                <a href="img/svetimarak.jpg"><img className="location-image"
                                                  src="img/svetimarak.jpg"
                                                  alt="Sveti Marak (St Mark's)"/></a>
              </p>
              <p style={{textAlign: "center"}}>
                <a href="https://g.page/ShottleHall?share">Google Maps</a> | <a
                  href="img/city-hvar-map.jpg">Tourist Map</a>
              </p>
            </div>
            <div className="one-half column">
              <h2>RECEPTION</h2>
              <p>16:30</p>
              <p>
                <a href="img/svetimarak.jpg"><img className="location-image"
                                                  src="img/svetimarak.jpg"
                                                  alt="Sveti Marak (St Mark's)"/></a>
              </p>
              <p style={{textAlign: "center"}}>
                <a href="https://g.page/ShottleHall?share">Google Maps</a> | <a
                  href="img/city-hvar-map.jpg">Tourist Map</a>
              </p>
            </div>
          </div>
        </div>

        <hr/>

        <h2>ON THE WEDDING DAY</h2>
        <p>The ceremony will start at 17:00 at the Sveti Marak church courtyard.
          Please arrive 10 to 15 minutes before so everybody can get
          seated and so we can start on time.
        </p>
        <p>After the ceremony we will raise a glass of champagne and someone
          will lead you to the reception where drinks and appetizers will
          be served.
        </p>
        <p>
          Wedding attire is summer formal. Gentlemen, please wear a light suit
          with which you will be comfortable with the heat. And ladies,
          you look pretty as you are, in your formal summer dresses :)
        </p>

        <hr/>

        <h2>DAY BEFORE THE WEDDING (30 August)</h2>
        <p>Welcome cocktails will be held on the terrace of <a
            href="https://goo.gl/Vd3ZJd">Restaurant Park Hvar</a> from 18:30 to
          23:30.
        </p>
        <p>
          Cocktail night attire is dressy-casual.
        </p>

        <hr/>

        <h2>DAY AFTER THE WEDDING (1 September)</h2>
        <p>Farewell brunch will be held at 11:00 at the&nbsp;
          <a href="http://www.suncanihvar.com/amfora-hvar-grand-beach-resort/maestral-balkan-grill.html">Maestral
            Restaurant</a>. It is located
          just a few meters on the path that takes you to the <a
              href="https://goo.gl/r9TFHt">wedding venue</a>.
        </p>
        <p>
          Brunch attire is wear anything you want :)
        </p>
      </TopicContainer>

      <TopicContainer id="rsvp" title="RSVP">
        <RSVPForm>
        </RSVPForm>
      </TopicContainer>

      <TopicContainer id="logistics" title="Logistics">
        <p>We understand that going to a different country to attend a wedding
          can be a daunting experience. That's why in this section
          we have tried to compile information and links to help make your
          travel and hotel booking as simple as possible and to give
          you ideas for how to make a complete vacation out of your trip. Please
          read through it and if you feel you need any additional
          information or help, do not hesitate to contact us.
        </p>

        <hr/>

        <h2>GETTING TO DERBY</h2>
        <p>Being a popular summer tourist destination, getting to Croatia is
          relatively easy. The closest major city to Hvar is&nbsp;
          <a href="https://goo.gl/maps/a8JeWAEuugN2">Split</a> and it is fairly
          well connected by pretty much all European airlines
          and some low-cost carriers, such as&nbsp;
          <a href="https://wizzair.com/#/booking/select-flight/LTN/SPU/2017-08-22/2017-09-02/1/0/0">WizzAir</a> and&nbsp;
          <a href="https://www.eurowings.com/en.html">Eurowings</a>.
        </p>
        <p>The second closest major airport is in <a
            href="https://goo.gl/maps/goc5oZWa3wC2">Dubrovnik</a>. It is about 5
          hours away
          from Hvar via a ferry, which is kind of far, but if you are planning
          on doing some touring before or after the wedding it is
          a great location to visit. Have a look at the 'Things to do section'
          further down for more information on that.
        </p>
        <p>As of the time of writing there are no&nbsp;
          <a href="https://www.kayak.com/flights/NYC-SPU/2017-08-25/2017-09-02/2adults">direct
            flights</a>&nbsp;
          from the US or Canada to Croatia, so guests coming from there will
          have to do at least one connection in a major European hub
          such as Frankfurt, Zurich or Amsterdam.
        </p>

        <hr/>

        <p>
          <img className="large-image" src="img/hvar.jpg" alt="Hvar town"/>
        </p>

        <h2>FERRY TO THE ISLAND OF HVAR</h2>
        <p>The Split airport is located about 25km (16mi) from the harbour from
          where the ferries leave for Hvar. According to the bus
          company's <a
              href="http://www.buscroatia.com/airport-split/">website</a> a taxi
          should cost about 35 EUR/40 USD for 1-3 people
          while the bus costs around 4 EUR/5 USD per person. Unless you are in a
          real hurry to catch a ferry, we recommend taking the
          bus. They are big white coaches just a few steps to the left after you
          exit though the main airport entrance and we found them
          to be very comfortable and convenient. They accept both cash and
          credit card for payment.
        </p>

        <div id="gmap">
          <iframe
              src="https://www.google.com/maps/d/embed?mid=1QdPbr1DgM7Cgiw2PwAbLgpINiSI"></iframe>
        </div>

        <p>The bus or taxi will drop you off at the Split bus station, which is
          on the water. The bus drop-off is only 5 minutes walk
          from the ferry ticket kiosk. There you can buy tickets or ask for the
          terminal from which your ferry leaves if it is unclear
          from the large electronic panel infront of it, listing the departures.
          The ferry ticket kiosk looks like this:
        </p>
        <p>
          <img className="large-image" src="img/split-ferry-ticket-kiosk.jpg"
               alt="Ferry tickets kiosk"/>
        </p>

        <p>Once you are at the seaport and looking for transportation to the
          island, please note that there are two landing spots on the
          island - Hvar Town and the Old Town (Stari Grad). The wedding will be
          in Hvar Town, which is in the south-west end of the island,
          not in the Old Town, which is on the nortern end. Please make sure you
          are boarding the right ferry, but even if you make a
          mistake, stay calm because there is a very convenient bus between the
          two. As a rule, the car ferries go to Old Town (Stari Grad)
          and take about 2 hours to travel and the fast passenger ferries
          (catamaran) go directly to Hvar Town and take 1 hour.
        </p>

        <div id="gmap">
          <iframe
              src="https://www.google.com/maps/d/embed?mid=1H0mc9QKj_OwW1TZCWtQc_tb3s9k"></iframe>
        </div>

        <p>There are two ferry companies which serve the route from Split to
          Hvar - Jadrolinija and Kapetan Luka. Below we have information
          for each of them.
        </p>

        <h3><a href="http://www.jadrolinija.hr/en/ferry-croatia">Jadrolinija</a>
        </h3>
        <p>This is a high-speed catamaran service from Split to Hvar Town which
          takes about 65 min. This is the fastest option and costs
          around 10 EUR/11 USD per person. If you have a car, this site also
          contains the schedule and pricing for the ferries, which
          transport cars to the island.
        </p>
        <br/>

        <h3><a href="http://www.krilo.hr/en/index.html">Kapetan Luka</a></h3>
        <p>This is the regular ferry service which takes about 2.5 hours and
          should cost around 5-10 EUR/6-11 USD per person.
        </p>
        <br/>

        <h3><a href="https://www.atlantis-marine.net/en/croatia-boat-transfers">Chartered
          Speed Boat</a></h3>
        <p>If you are coming as a group or feel like a one percenter, this site
          has information for inclusive transportation packages with
          pickup from the airport. The sailing part of the journey takes between
          45 min to 1 hour, which is similar to the catamaran service,
          but is a little bit more convenient because it also includes a pickup
          from the airport. If you choose this option, there is a 5%
          discount using <SecretTooltip fnTooltip={() => {
            return 'adriaticweddings';
          }}>this code</SecretTooltip> (please click on the
          'this' in order to show it).
        </p>

        <hr/>

        <h2>DRIVING</h2>
        <p>For those renting a car or driving to Croatia, we found the driving
          conditions on the island to be good and there is a
          parking spot right in the center of the town for 1 EUR/hour or 12
          EUR/day.
        </p>
        <p>
          Please note that unless you are coming by car to the island of Hvar,
          there should not be a need for you to rent one. There are
          many organized boat trips to discover the surrounding Dalmatian
          islands and cabrio cars can be rented daily at a fairly decent
          price from Hvar itself and the paperwork is not that much. For example
          we rented this funny car for about 60 USD for a day trip:
        </p>
        <p>
          <img className="large-image" src="img/hvar-rental-car.jpg"
               alt="Day car rental"/>
        </p>

        <hr/>

        <h2>ACCOMMODATIONS</h2>
        <p>Once on the island in Hvar Town there are various accommodation
          options ranging from fancy hotels to renting an apartment
          on <a href="https://goo.gl/uHTDYn">AirBnB</a>. The wedding will be in
          the Amfora Resort so any accommodation within walking
          distance from there should be fine.
        </p>
        <p>From our research we have found that hotels are fairly expensive and
          there are very nice AirBnB options available, so we highly
          recommend doing that.
        </p>
        <p>For guests wishing to stay in a hotel, the <a
            href="http://www.suncanihvar.com/">Suncani Hvar</a> chain of hotels
          offers a 20%
          discount using <SecretTooltip fnTooltip={() => {
            return 'WEDDKALOIANJOCELYN';
          }}>this code</SecretTooltip> (please click on the
          'this' in order to show it). The code must be entered in the <i>"Corporate/Promo
            Code ?"</i> section for the discounted prices to
          apply and is valid for staying 5 days prior and 5 days after the
          wedding day. While this code indeed reduces the listed prices,
          we have found that booking through <a
              href="https://goo.gl/2xzaIg">Expedia</a> or <a
              href="https://goo.gl/z6zsZk">Hotels.com</a>&nbsp;
          shows about the same prices or in some cases even cheaper, so please
          bear that in mind as well.
        </p>
      </TopicContainer>

      <TopicContainer id="thingstodo" title="Things to do in Derbyshire">
        <p>Since a lot of you are coming from different parts of the world, we
          presume that you would like to make a full vacation out of your
          trip to Derbyshire. In this section we are listing some of the main
          tourist attractions and have suggestions for places to visit.
          As a disclaimer, some of these suggestions are compiled from various
          online sources such as TripAdvisor but trust us we have visited them
          and they are awesome :)
        </p>
        <br/>

        <h2><a
            href="https://www.lonelyplanet.com/england/the-midlands/bakewell">BAKEWELL</a>
        </h2>
        <p>
          <img className="large-image" src="img/bakewell.jpg"
               alt="Bakewell old town"/>
        </p>
        <p>Perhaps best known for its unique and delicious Pudding, Bakewell has
          many more tempting treats to offer - ranging from shopping and
          specialist markets to relaxing strolls and special events.
          Idyllically situated on the banks of the river Wye, the biggest town
          in the Peak District National Park's mellow stone buildings, medieval
          five-arched stone bridge and quaint courtyards are a magnet for
          painters, photographers and sightseers alike. See&nbsp;
          <a href="https://www.travelaboutbritain.com/derbyshire/bakewell.php">this
            article</a> for more
          information.
        </p>
        <br/>

        <h2><a
            href="https://www.peakdistrict.gov.uk/home">PEAK DISTRICT</a>
        </h2>
        <p>
          <img className="large-image" src="img/peak-district.jpg"
               alt="Peak District"/>
        </p>
        <p>The Peak District National Park covers 555 square miles of the most
          beautiful areas of Derbyshire, Staffordshire, Cheshire, Yorkshire and
          even parts of Greater Manchester. It was the first National Park ever
          created in the UK, back in 1951, and it now receives more than 10 million
          visitors every year. People come here for the stunning countryside,
          charming towns and villages,and the freedom to escape from the crowds
          on miles of footpaths, bridleways and cycle trails.
          &nbsp; <a href="https://www.peakdistrict.org/">This website</a> has
          plenty of information on all the wonderful things you can do in the
          National Park.
        </p>
        <br/>

        <h2>
          <a href="https://www.chatsworth.org">CHATSWORTH HOUSE</a>
        </h2>
        <p>
          <img className="large-image" src="img/chatsworth.jpg"
               alt="Chatsworth"/>
        </p>
        <p>Chatsworth, home of the Duke and Duchess of Devonshire, is set in the
          heart of the Peak District in Derbyshire, on the banks of the river
          Derwent.

          <a href="https://www.chatsworth.org">Chatsworth House</a> has over
          30 rooms to explore, from the magnificent Painted Hall, to the
          family-used chapel, regal State Rooms and beautiful Sculpture Gallery.
          Chatsworth also houses the Devonshire Collection, one of Europe's most
          significant art collections, which is continually added to, encompassing
          Old Masters to contemporary ceramics and artefacts from Ancient Egypt
          to cutting edge modern sculpture.
        </p>
        <br/>

        <h2>
          <a href="http://www.matlock.org.uk">MATLOCK</a>
        </h2>
        <p>
          <img className="large-image" src="img/matlock.jpg"
               alt="Matlock"/>
        </p>
        <p>Once famed for its hydro and spa treatments, Matlock's central
          location, scenic surroundings and public transport links make it a
          popular base for exploring the best of the Peak District and Derbyshire.

          Crown Square and the river Derwent lie at the heart of Matlock, and
          the gateway to award-winning Hall Leys Park with its boating lake,
          riverside walks, tennis courts and skateboard park. Hall Leys is the
          first of five beautifully-restored public parks stretching along the
          Derwent to Matlock Bath - a scenic option for a leisurely stroll.

          See&nbsp;
          <a href="https://www.visitpeakdistrict.com/explore/towns-and-villages/matlock-p680431">this
            article</a> for more information.
        </p>
        <br/>

        <h2>
          <a href="https://www.nationaltrust.org.uk/ilam-park-dovedale-and-the-white-peak/features/visiting-dovedale">DOVEDALE</a>
        </h2>
        <p>
          <img className="large-image" src="img/dovedale.jpg"
               alt="Dovedale"/>
        </p>
        <p>
        </p>
      </TopicContainer>

      <TopicContainer id="gifts" title="Gifts">
        <p>Dear family and friends,</p>
        <p>We feel honoured that you are all travelling a long way to come and
          celebrate our special day with us. For this reason we don't
          want anyone to feel obliged to buy us gifts. Your presence is the
          biggest gift.
        </p>
        <p>If you do feel that you want to give us a gift please see &nbsp;
          <a href="https://www.gifts.com/">here</a>
        </p>
        <p>Thank you in advance!
        </p>
      </TopicContainer>

    </div>
);

ReactDOM.render(websiteContent, document.getElementById('content'));
