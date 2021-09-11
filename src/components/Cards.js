import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
 
function Cards() {
          return (
                    <div className="cards">
                              <h1>Check out this epic Destinations</h1>
                              <div className="cards__container">
                                        <div className="cards__wrapper">
                                                  <ul className="__items">
                                                            <CardItem
                                                            src='images/img-9.jpg'
                                                            text='Explore the hidden waterfall deep inside the amazon Jungle'
                                                            label='Adventure'
                                                            path='services'

                                                            />
                                                            <CardItem
                                                            src='images/img-9.jpg'
                                                            text='Explore the hidden waterfall deep inside the amazon Jungle'
                                                            label='Adventure'
                                                            path='services'

                                                            />
                                                  </ul>
                                                  <ul className="__items">
                                                            <CardItem
                                                            src='images/img-9.jpg'
                                                            text='Explore the hidden waterfall deep inside the amazon Jungle'
                                                            label='Adventure'
                                                            path='services'

                                                            />
                                                            <CardItem
                                                            src='images/img-9.jpg'
                                                            text='Explore the hidden waterfall deep inside the amazon Jungle'
                                                            label='Adventure'
                                                            path='services'

                                                            />
                                                  </ul>

                                        </div>
                              </div>

                    </div>
          )
}

export default Cards
