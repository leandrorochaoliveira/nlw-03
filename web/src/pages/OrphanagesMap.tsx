import React, {useEffect} from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import '../assets/styles/pages/orphanages-map.scss'
import imgMarker from '../assets/images/marker.svg';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';


function OrphanagesMap() {

    useEffect(() => {
        api.get('orphanages').then(response => {
            console.log()
            // const orphanages = response.data
        })
    }, [])

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
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        lar 
                        <Link to="/orphanages/1">
                           <FiArrowRight size={20} color="#fff" />
                        </Link>
                    </Popup>

                </Marker>

            </Map>
            

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>

        </div>
    )
}

export default OrphanagesMap;