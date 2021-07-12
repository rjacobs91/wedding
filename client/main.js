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
                  <img className="thumbnail" src="img/katie-baby.jpg"
                       alt="Katie"/>
                </a>
                Katie is an adventurous and thoughtful woman, who is as friendly
                as she is bossy! Exciting as it is to be raised in Derby, the
                heartland of Britain's Industrial Revolution, Katie made it
                her mission to live and explore as much of the world as she
                could.
                Eagerly, she set off to teach English in China, followed by
                working in a human rights organisation in Cambodia. After the
                culture shock of South East Asia, Katie made her way through the
                diverse streets of London, where she met Russell, finally
                returning to the leisurely ways of Derby. While Katie was
                working in
                London at a law firm, she would reminisce about her time in
                China
                realizing her passion in life, she knew her dream job was to
                inspire the next generation as a teacher.
              </p>
            </div>

            <div className="one-half column">
              <p>
                <a href="img/russell-baby.jpg">
                  <img className="thumbnail" src="img/russell-baby.jpg"
                       alt="Russell"/></a>
                Although from a distance, Russell might appear to be another
                (handsome) computer geek, his character is much more than this.
                His energetic, driven nature took him from his home in Surrey,
                to the Harry Potteresque world of Durham, where he enjoyed
                formals,
                engineering and making life-long friends. He then succumbed to
                the dark side and entered the cut-throat world of banking, which
                took him back to London and for a time, the leafy streets of the
                Champs-Elysees. He kept himself busy back on the Isle of Dogs,
                living opposite a windsurfing centre and pub. His life changed
                for the better however, when he met Katie at a bustling,
                Southbank salsa bar and a new, wonderful adventure was embarked
                upon.
              </p>
            </div>
          </div>
        </div>

        <hr/>

        <p>
          <img className="large-image" src="img/together.jpg"
               alt="Russell and Katie"/>
        </p>

        <h2>OUR STORY</h2>
        <p>
          Being children of the modern day and age, our story began with
          venturing onto Tinder. As hesitant as Katie was to dabble with a
          complete stranger online, Russell happily explored with enthusiasm.
          On our first date, the combination of salsa and tequila definitely
          enhanced the sparks felt on our initial meeting, and as the cliche
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
          <p>Shottle Hall Estate is nestled amongst rolling hills and offers
            stunning countryside views. Shottle Hall stands on the edge of the
            Peak District National Park and forms part of the famous Chatsworth
            House Estate.
          </p>

          <hr/>

          <div className="row">
            <div className="one-half column">
              <h2>CEREMONY - 15:00</h2>
            </div>
            <div className="one-half column">
              <h2 style={{textAlign: "right"}}>EVENING MEAL - 17:30</h2>
            </div>
          </div>

          <p>
            <img className="large-image" src="img/shottle-hall-ceremony.jpg"
                 alt="Shottle Hall Ceremony"/>
          </p>
          <p style={{textAlign: "center"}}>
            <a href="https://g.page/ShottleHall?share">Google Maps</a> | <a
              href="img/amber-valley-map.jpg">Local Tourist Map</a>
          </p>
        </div>

        <hr/>

        <h2>ON THE WEDDING DAY</h2>
        <p>The ceremony will start at 15:00 at Shottle Hall. Please arrive at
          least 30 minutes before, so everyone can get seated and so we can
          start on time. For those that fancy a bit of socialising before the
          ceremony, a bar onsite will be open from 14:00.
        </p>
        <p>After the ceremony, we will raise a glass of prosecco or two and
          there will be an opportunity for further socialising and some outdoor
          games, weather permitting.
        </p>
        <p>At around 17:30, we will sit down to a three course meal where the
          speeches will also take place. Afterwards, there will be a live band
          who will play a series of Ceilidh songs as well as some more modern
          music. So please bring your dancing shoes!
        </p>
        <p>The bar will close at 00:00, so get your drinks orders in!
        </p>
        <p>Wedding attire is summer formal.
        </p>

        <hr/>

        <h2>DAY BEFORE THE WEDDING (31 July)</h2>
        <p>Informal drinks will be held at the&nbsp;
          <a href="https://www.struttarms.co.uk/">Strutts Arms</a> pub in
          Milford from 18:00 till 21:00. It will be a drop in drop out event, so
          feel to come and go as you please.
        </p>
        <p>
          Drinks attire is wear anything you want :)
        </p>

        <hr/>

        <h2>DAY AFTER THE WEDDING (2 August)</h2>
        <p>As Derbyshire is famous for its peaks and hills, we are planning on
          organising hike to start at around 12:00 in&nbsp;
          <a href="https://goo.gl/maps/MCN1zKAP3e163MEW6">Belper</a>.
          A number of people we suspect will already be staying here, but for
          those staying in Derby, Belper is a short drive along the A6.
        </p>
        <p>
          Walking attire is recommended.
        </p>
      </TopicContainer>

      <TopicContainer id="rsvp" title="RSVP">
        <RSVPForm>
        </RSVPForm>
      </TopicContainer>

      <TopicContainer id="logistics" title="Logistics">
        <p>We understand that going to a different city (or country in some
          cases) to attend a wedding can be a daunting experience. That's why in
          this section, we have tried to compile information and links to help
          make your travel and hotel booking as simple as possible and to give
          you ideas for how to make a complete vacation out of your trip. Please
          read through it and if you feel you need any additional
          information or help, do not hesitate to contact us.
        </p>

        <hr/>

        <h2>GETTING TO SHOTTLE HALL</h2>
        <p>Being situated in Derbyshire, a popular summer tourist destination,
          getting to Shottle Hall is relatively easy. The closest major city to
          Shottle Hall is <a
              href="https://goo.gl/maps/d3AE4vXmwyMt37ST6">Derby</a>
          &nbsp;and it is fairly well connected by both train and car. However,
          public transport does not run all night so a taxi back from the venue
          will be required. If enough people are staying in close proximity, we
          will investigate booking a minibus.
        </p>

        <hr/>

        <p>
          <img className="large-image" src="img/sixes-bus.jpg" alt="Sixes Bus"/>
        </p>

        <h2>GETTING TO SHOTTLE HALL BY PUBLIC TRANSPORT</h2>
        <p>Travelling to Shottle Hall via public transport is fairly simple. For
          those staying in Derby or anywhere along the A6 (Duffield, Belper or
          Milford) the route would be the same. Trains run from St. Pancras to
          Derby every hour. From Derby Bus Station you should take the 6.1 bus
          to Wirksworth Road. For departure times anywhere along this route
          please see this <a
              href="https://www.trentbarton.co.uk/services/sixes/timetable">timetable</a>.
        </p>

        <hr/>

        <h2>DRIVING TO SHOTTLE HALL</h2>
        <p>For those renting a car or driving to Shottle Hall from London, the
          easiest route is to take the M1 and exit at Junction 25 taking the
          A52 towards Derby city centre. Take the A601, which connects with the
          A6. Follow the A6 till just past the junction to Belper, taking a left
          onto A517. When you see the Railway Inn pub take a right onto B5023,
          finally taking a right onto White Lane. There is plenty of parking
          available at Shottle Hall.
        </p>
        <p>Please note that unless you are coming by car to Derbyshire,
          there should not be a need for you to rent one. Buses are typically
          once a hour on a Sunday anywhere along the A6 between Derby city and
          the Peak District.
        </p>
        <br/>

        <p>
          <img className="large-image" src="img/russell-car.jpg"
               alt="Car rental"/>
        </p>

        <hr/>

        <h2>TAXIS</h2>
        <p>Although some of you may decide to get public transport to Shottle
          Hall on our wedding day we heavily advise getting a taxi back to your
          accommodation, as public transport stops running early on a Sunday.
          Below is a list of local taxi firms for both Belper and Derby. Uber
          does run in Derby and the area local to Shottle Hall but is generally
          less reliable than local taxis firms.
        </p>
        <br/>

        <div className="row">
          <div className="one-half column">
            <h3>Albatross Cars</h3>
            <p>14A Midland Rd, Derby DE1 2SN</p>
            <p>01332 345345</p>
            <h3>Steve's Cars</h3>
            <p>56-58 Bridge St, Belper DE56 1AZ</p>
            <p>01773 525323</p>
            <h3>Scott's Taxis</h3>
            <p>65 King St, Belper DE56 1QA</p>
            <p>01773 880880</p>
          </div>
          <div className="one-half column">
            <h3>Western Taxis</h3>
            <p>45 Nelson St, Derby DE1 2RU</p>
            <p>01332 331331</p>
            <h3>Derwent Cars</h3>
            <p>18 Yardley Way, Belper DE56 0ES</p>
            <p>01773 824824</p>
            <h3>Redline Cars</h3>
            <p>17 Wheeldon Ave, Belper DE56 1GX</p>
            <p>07752 195541</p>
          </div>
        </div>

        <hr/>

        <h2>ACCOMMODATION</h2>
        <p>Once in Derbyshire, there are various accommodation options ranging
          from fancy hotels to renting an <a
              href="https://www.airbnb.co.uk/s/Derbyshire--England/homes?place_id=ChIJTRhgylBVd0gRYxzUrCNcT7w&refinement_paths%5B%5D=%2Fhomes&checkin=2021-07-31&checkout=2021-08-02">AirBnB</a>.
          Shottle Hall is within comfortable walking distance from Idridgehay
          and Shottle village but otherwise we'd heavily recommend a taxi or
          the bus.
        </p>
        <p>From our research we have found that renting an apartment in Derby
          city centre can be fairly expensive, however there are very nice hotel
          options in the city and AirBnB options available as you get further
          out into the Peak District. Outside of Derby, we highly recommend
          booking in places such as Matlock, Belper, Crich or Cromford.
        </p>
        <p>For guests wishing to stay in a hotel please see recommendations
          below.
        </p>
        <br/>

        <div className="row">
          <div className="one-half column">
            <h3><a href="https://www.thetalbot.co.uk/">The Talbot Hotel</a></h3>
            <p>Bridge Foot, Belper, Derbyshire, DE56 2UA</p>
            <p>01773 822258</p>
            <p>2.6 miles</p>

            <h3><a href="https://www.premierinn.com">The Premier Inn</a></h3>
            <p>Full Street, Derby, DE1 3AF</p>
            <p>0333 234 6502</p>
            <p>9.0 miles</p>

            <h3><a href="https://www.ihg.com">Holiday Inn</a></h3>
            <p>Pride Park, Derby, DE24 8HX</p>
            <p>0871 4234876</p>
            <p>9.7 miles</p>

            <h3><a href="https://www.pentahotels.com/">Penta Hotel</a></h3>
            <p>Pride Park, Derby, DE24 8PU</p>
            <p>01332 376420</p>
            <p>10.3 miles</p>
          </div>
          <div className="one-half column">
            <h3><a href="https://www.thelionhotelbelper.co.uk/">The Lion
              Hotel</a></h3>
            <p>24 Bridge St, Belper, DE56 1AX</p>
            <p>01773 824033</p>
            <p>3.1 miles</p>

            <h3><a href="https://www.jurysinns.com/hotels/derby">Jurys Inn</a>
            </h3>
            <p>King Street, Derby, DE1 3DB</p>
            <p>01332 621000</p>
            <p>8.3 miles</p>

            <h3><a href="https://www.travelodge.co.uk">Travelodge</a></h3>
            <p>Pride Park, Derby, DE24 8HG</p>
            <p>0871 9846434</p>
            <p>10.2 miles</p>
          </div>
        </div>
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

        <h2>
          <a href="https://www.derbymuseums.org/museum-of-making/">MUSEUM OF
            MAKING - DERBY</a>
        </h2>
        <p>
          <img className="large-image" src="img/museum-of-making.jpg"
               alt="Museum of Making"/>
        </p>
        <p>Celebrating the area’s rich history of innovation, the Museum of
          Making in the Derwent Valley Mills UNESCO World Heritage Site will
          be a contemporary space telling Derby’s 300-year history of making to
          inspire new creativity on the site of the world’s first factory.
          This will be opening for the first time in Spring 2021 and will be
          one of the first museums we visit ourselves post lockdown. See&nbsp;
          <a href="https://www.derbymuseums.org/museum-of-making/about/">this
            article</a> for more information.
        </p>
        <br/>

        <h2><a
            href="https://www.lonelyplanet.com/england/the-midlands/bakewell">BAKEWELL</a>
        </h2>
        <p>
          <img className="large-image" src="img/bakewell.jpg"
               alt="Bakewell old town"/>
        </p>
        <p>Perhaps best known for its unique and delicious pudding, Bakewell has
          many more tempting treats to offer - ranging from shopping and
          specialist markets to relaxing strolls and special events.
          Idyllically situated on the banks of the River Wye, the biggest town
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
          created in the UK, back in 1951, and it now receives more than 10
          million visitors every year. People come here for the stunning
          countryside, charming towns and villages, and the freedom to escape
          from the crowds on miles of footpaths, bridleways and cycle trails.
          &nbsp;<a href="https://www.peakdistrict.org/">This website</a> has
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
          heart of the Peak District in Derbyshire, on the banks of the River
          Derwent. <a href="https://www.chatsworth.org">Chatsworth House</a> has
          over 30 rooms to explore, from the magnificent Painted Hall, to the
          family-used chapel, regal State Rooms and beautiful Sculpture Gallery.
          Chatsworth also houses the Devonshire Collection, one of Europe's most
          significant art collections, which is continually added to,
          encompassing
          Old Masters to contemporary ceramics and artefacts from Ancient Egypt
          to cutting edge modern sculpture. The grounds of the estate are also
          stunning and well worth a visit on their own.
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
          popular base for exploring the best of the Peak District and
          Derbyshire.
          Crown Square and the River Derwent lie at the heart of Matlock, and
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
          <a href="https://letsgopeakdistrict.co.uk/matlock-bath/">MATLOCK
            BATH</a>
        </h2>
        <p>
          <img className="large-image" src="img/matlock-bath.jpg"
               alt="Matlock Bath"/>
        </p>
        <p>1.5 miles south of the town of Matlock, along the A6, Matlock Bath
          is set in the beautiful gorge of the River Derwent, with attractive
          riverside gardens, wooded hillsides and rocky limestone crags. A
          popular tourist destination since the late 17th Century when the spa
          waters were discovered, its heyday was in Victorian times when it
          became known as "Little Switzerland" by the poet, Lord Byron. A
          popular destination for families, bikers and fun seekers, there are
          plenty of things to do and see. Half a mile south of the village is
          the shopping complex and historical working textile museum at Masson
          Mills. There are lots of places to eat and drink and the village has a
          variety of gift shops.
        </p>
        <br/>

        <h2>
          <a href="https://www.nationaltrust.org.uk/ilam-park-dovedale-and-the-white-peak/features/visiting-dovedale">DOVEDALE</a>
        </h2>
        <p>
          <img className="large-image" src="img/dovedale.jpg"
               alt="Dovedale"/>
        </p>
        <p>Dovedale is known for the River Dove and it’s impressive limestone
          ravines, but the most iconic part of a trip to Dovedale has to be the
          picturesque stepping stones…Following the River Dove up towards the
          stepping stones you can cross and climb to the top of Thorpe Cloud,
          giving fantastic panoramic views of the Peak District. The River Dove
          flows through Milldale, which is a great starting point for the walk
          down through Dovedale to the stepping stones, as well as Wolfscote
          Dale and Beresford Dale. Here there are also a network of footpaths
          and walks either along the river or over the surrounding countryside.
        </p>
      </TopicContainer>

      <TopicContainer id="gifts" title="Gifts">
        <p>Dear family and friends,</p>
        <p>The biggest gift you can give us is your attendance at our wedding
          and to have a merry time. If you do feel however that you want to give
          us a gift, we would be very grateful to receive a donation towards our
          honeymoon in Japan (when are are allowed to go). Our bank details are:
        </p>
        <p>Account name: JACOBS R & K</p>
        <p>Account number: 11664649</p>
        <p>Sort code: 60-24-28</p>
        <p>Alternatively as we've just bought a new home, we would be equally
          as grateful for something like a John Lewis voucher, a surprise gift
          of your choice or something from <a
              href="https://www.johnlewis.com/wish-list/RFDKNKT">here.</a>
        </p>
        <p>Thank you in advance!
        </p>
      </TopicContainer>

    </div>
);

ReactDOM.render(websiteContent, document.getElementById('content'));
