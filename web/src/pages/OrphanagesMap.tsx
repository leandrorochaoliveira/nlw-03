import React from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet'

import 'leaflet/dist/leaflet.css'

import '../assets/styles/pages/orphanages-map.scss'

import imgMarker from '../assets/images/marker.svg';

const mapIcon = Leaflet.icon({
    iconUrl: imgMarker,
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor:[170,2]
})

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={imgMarker} alt="Happy"/>

                    <h2>Esolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>

                </header>
                <footer>
                    <strong>Formiga</strong>
                    <span>Minas Gerais</span>
                </footer>
            </aside>

            <Map
                center={[-20.5241837,-45.681674]}
                zoom={15}
                style={{width: '100%', height: '100%'}}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

                <Marker
                    icon={mapIcon}
                    position={[-20.5241837,-45.681674]}
                >
                    <Popup closeOnClose={false} minWidth={240} maxWidth={240} className="map-popup">
                        lar 
                        <Link to="">
                           <FiArrowRight size={20} color="#fff" />
                        </Link>
                    </Popup>

                </Marker>

            </Map>
            

            <Link to="/app" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>

        </div>
    )
}

export default OrphanagesMap;