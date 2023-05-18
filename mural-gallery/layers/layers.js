var wms_layers = [];


        var lyr_Whites_0 = new ol.layer.Tile({
            'title': 'Whites',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i{z}!2i{x}!3i{y}!4i256!2m3!1e0!2sm!3i646385893!3m17!2sen!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjF8cC52Om9mZixzLnQ6MXxzLmU6bC50LmZ8cC5jOiM0NDQ0NDQscy50OjV8cC5jOiNmZmZmZmZ8cC52Om9uLHMudDoyfHAudjpvZmYscy50OjN8cC5zOi0xMDB8cC5sOjQ1LHMudDo0OXxwLnY6c2ltcGxpZmllZCxzLnQ6NDl8cy5lOmcuZnxwLmM6I2NlY2VjZXxwLnY6b24scy50OjQ5fHMuZTpnLnN8cC52Om9mZixzLnQ6NTB8cy5lOmcuZnxwLmM6I2UyZTJlMixzLnQ6NTB8cy5lOmcuc3xwLnY6b2ZmLHMudDo1MHxzLmU6bC50LmZ8cC5jOiNiY2JjYmMscy50OjUwfHMuZTpsLnQuc3xwLmM6I2ZmZmZmZnxwLnY6b258cC5nOjAuMDAscy50OjUwfHMuZTpsLml8cC52Om9mZixzLnQ6NTF8cy5lOmcuZnxwLmM6I2UyZTJlMixzLnQ6NTF8cy5lOmcuc3xwLnY6b2ZmLHMudDo1MXxzLmU6bC50fHAuYzojYzljOWM5LHMudDo1MXxzLmU6bC50LmZ8cC5jOiNiY2JjYmN8cC5sOjAscy50OjUxfHMuZTpsLnQuc3xwLmM6I2ZmZmZmZixzLnQ6NHxwLnY6b2ZmLHMudDo2fHAuYzojNDZiY2VjfHAudjpvZmY!4e0'
            })
        });
var format_LightRailLines_1 = new ol.format.GeoJSON();
var features_LightRailLines_1 = format_LightRailLines_1.readFeatures(json_LightRailLines_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LightRailLines_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LightRailLines_1.addFeatures(features_LightRailLines_1);
var lyr_LightRailLines_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LightRailLines_1, 
                style: style_LightRailLines_1,
                interactive: true,
                title: '<img src="styles/legend/LightRailLines_1.png" /> Light Rail Lines'
            });
var format_Stations_2 = new ol.format.GeoJSON();
var features_Stations_2 = format_Stations_2.readFeatures(json_Stations_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stations_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stations_2.addFeatures(features_Stations_2);
var lyr_Stations_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stations_2, 
                style: style_Stations_2,
                interactive: true,
                title: '<img src="styles/legend/Stations_2.png" /> Stations'
            });
var format_WalkingRoute_3 = new ol.format.GeoJSON();
var features_WalkingRoute_3 = format_WalkingRoute_3.readFeatures(json_WalkingRoute_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WalkingRoute_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WalkingRoute_3.addFeatures(features_WalkingRoute_3);
var lyr_WalkingRoute_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WalkingRoute_3, 
                style: style_WalkingRoute_3,
                interactive: true,
                title: '<img src="styles/legend/WalkingRoute_3.png" /> Walking Route'
            });
var format_MuralsSheet1_4 = new ol.format.GeoJSON();
var features_MuralsSheet1_4 = format_MuralsSheet1_4.readFeatures(json_MuralsSheet1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MuralsSheet1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MuralsSheet1_4.addFeatures(features_MuralsSheet1_4);
var lyr_MuralsSheet1_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MuralsSheet1_4, 
                style: style_MuralsSheet1_4,
                interactive: true,
                title: '<img src="styles/legend/MuralsSheet1_4.png" /> Murals - Sheet1'
            });
var format_MuralsBreweries_5 = new ol.format.GeoJSON();
var features_MuralsBreweries_5 = format_MuralsBreweries_5.readFeatures(json_MuralsBreweries_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MuralsBreweries_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MuralsBreweries_5.addFeatures(features_MuralsBreweries_5);
var lyr_MuralsBreweries_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MuralsBreweries_5, 
                style: style_MuralsBreweries_5,
                interactive: true,
                title: '<img src="styles/legend/MuralsBreweries_5.png" /> Murals - Breweries'
            });

lyr_Whites_0.setVisible(true);lyr_LightRailLines_1.setVisible(true);lyr_Stations_2.setVisible(true);lyr_WalkingRoute_3.setVisible(true);lyr_MuralsSheet1_4.setVisible(true);lyr_MuralsBreweries_5.setVisible(true);
var layersList = [lyr_Whites_0,lyr_LightRailLines_1,lyr_Stations_2,lyr_WalkingRoute_3,lyr_MuralsSheet1_4,lyr_MuralsBreweries_5];
lyr_LightRailLines_1.set('fieldAliases', {'FID': 'FID', 'LineAbbr': 'LineAbbr', 'LineName': 'LineName', 'Frequency': 'Frequency', 'RouteType': 'RouteType', 'AvgBrd': 'AvgBrd', 'City': 'City', 'County': 'County', 'Shape__Len': 'Shape__Len', 'LineAbbr1': 'LineAbbr1', });
lyr_Stations_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'ADDRESS': 'ADDRESS', 'PARKNRIDE': 'PARKNRIDE', 'STATIONNAM': 'STATIONNAM', 'LINENAME': 'LINENAME', 'STATUS': 'STATUS', });
lyr_WalkingRoute_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PrimaryNam': 'PrimaryNam', 'ID': 'ID', 'Status': 'Status', 'Designated': 'Designated', 'SurfaceTyp': 'SurfaceTyp', 'Class': 'Class', 'CartoCode': 'CartoCode', 'OtherRestr': 'OtherRestr', 'HorseAllow': 'HorseAllow', 'MotorizedA': 'MotorizedA', 'HikeDiffic': 'HikeDiffic', 'BikeDiffic': 'BikeDiffic', 'ADAAccessi': 'ADAAccessi', 'OwnerStewa': 'OwnerStewa', 'County': 'County', 'Recreation': 'Recreation', 'SystemName': 'SystemName', 'TransNetwo': 'TransNetwo', 'Comments': 'Comments', 'DataSource': 'DataSource', 'Unique_ID': 'Unique_ID', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'SHAPE_Leng': 'SHAPE_Leng', 'OBJECTID_2': 'OBJECTID_2', 'STATUS_2': 'STATUS_2', 'CARTOCODE_': 'CARTOCODE_', 'FULLNAME': 'FULLNAME', 'FROMADDR_L': 'FROMADDR_L', 'TOADDR_L': 'TOADDR_L', 'FROMADDR_R': 'FROMADDR_R', 'TOADDR_R': 'TOADDR_R', 'PARITY_L': 'PARITY_L', 'PARITY_R': 'PARITY_R', 'PREDIR': 'PREDIR', 'NAME': 'NAME', 'POSTTYPE': 'POSTTYPE', 'POSTDIR': 'POSTDIR', 'AN_NAME': 'AN_NAME', 'AN_POSTDIR': 'AN_POSTDIR', 'A1_PREDIR': 'A1_PREDIR', 'A1_NAME': 'A1_NAME', 'A1_POSTTYP': 'A1_POSTTYP', 'A1_POSTDIR': 'A1_POSTDIR', 'A2_PREDIR': 'A2_PREDIR', 'A2_NAME': 'A2_NAME', 'A2_POSTTYP': 'A2_POSTTYP', 'A2_POSTDIR': 'A2_POSTDIR', 'QUADRANT_L': 'QUADRANT_L', 'QUADRANT_R': 'QUADRANT_R', 'STATE_L': 'STATE_L', 'STATE_R': 'STATE_R', 'COUNTY_L': 'COUNTY_L', 'COUNTY_R': 'COUNTY_R', 'ADDRSYS_L': 'ADDRSYS_L', 'ADDRSYS_R': 'ADDRSYS_R', 'POSTCOMM_L': 'POSTCOMM_L', 'POSTCOMM_R': 'POSTCOMM_R', 'ZIPCODE_L': 'ZIPCODE_L', 'ZIPCODE_R': 'ZIPCODE_R', 'INCMUNI_L': 'INCMUNI_L', 'INCMUNI_R': 'INCMUNI_R', 'UNINCCOM_L': 'UNINCCOM_L', 'UNINCCOM_R': 'UNINCCOM_R', 'NBRHDCOM_L': 'NBRHDCOM_L', 'NBRHDCOM_R': 'NBRHDCOM_R', 'ER_CAD_ZON': 'ER_CAD_ZON', 'ESN_L': 'ESN_L', 'ESN_R': 'ESN_R', 'MSAGCOMM_L': 'MSAGCOMM_L', 'MSAGCOMM_R': 'MSAGCOMM_R', 'ONEWAY': 'ONEWAY', 'VERT_LEVEL': 'VERT_LEVEL', 'SPEED_LMT': 'SPEED_LMT', 'ACCESSCODE': 'ACCESSCODE', 'DOT_HWYNAM': 'DOT_HWYNAM', 'DOT_RTNAME': 'DOT_RTNAME', 'DOT_RTPART': 'DOT_RTPART', 'DOT_F_MILE': 'DOT_F_MILE', 'DOT_T_MILE': 'DOT_T_MILE', 'DOT_FCLASS': 'DOT_FCLASS', 'DOT_SRFTYP': 'DOT_SRFTYP', 'DOT_CLASS': 'DOT_CLASS', 'DOT_OWN_L': 'DOT_OWN_L', 'DOT_OWN_R': 'DOT_OWN_R', 'DOT_AADT': 'DOT_AADT', 'DOT_AADTYR': 'DOT_AADTYR', 'DOT_THRULA': 'DOT_THRULA', 'BIKE_L': 'BIKE_L', 'BIKE_R': 'BIKE_R', 'BIKE_PLN_L': 'BIKE_PLN_L', 'BIKE_PLN_R': 'BIKE_PLN_R', 'BIKE_REGPR': 'BIKE_REGPR', 'BIKE_NOTES': 'BIKE_NOTES', 'UNIQUE_ID_': 'UNIQUE_ID_', 'LOCAL_UID': 'LOCAL_UID', 'UTAHRD_UID': 'UTAHRD_UID', 'SOURCE': 'SOURCE', 'UPDATED': 'UPDATED', 'EFFECTIVE': 'EFFECTIVE', 'EXPIRE': 'EXPIRE', 'CREATED': 'CREATED', 'CREATOR': 'CREATOR', 'EDITOR': 'EDITOR', 'CUSTOMTAGS': 'CUSTOMTAGS', 'GlobalID': 'GlobalID', 'TDMNET_L': 'TDMNET_L', 'TDMNET_R': 'TDMNET_R', 'PED_L': 'PED_L', 'PED_R': 'PED_R', 'SHAPE_Le_1': 'SHAPE_Le_1', });
lyr_MuralsSheet1_4.set('fieldAliases', {'Business': 'Business', 'Artist': 'Artist', 'Year': 'Year', 'Address': 'Address', 'Lat': 'Lat', 'Long': 'Long', });
lyr_MuralsBreweries_5.set('fieldAliases', {'Name': 'Name', 'Long': 'Long', 'Lat': 'Lat', });
lyr_LightRailLines_1.set('fieldImages', {'FID': 'Range', 'LineAbbr': 'TextEdit', 'LineName': 'TextEdit', 'Frequency': 'TextEdit', 'RouteType': 'TextEdit', 'AvgBrd': 'Range', 'City': 'TextEdit', 'County': 'TextEdit', 'Shape__Len': 'TextEdit', 'LineAbbr1': 'Range', });
lyr_Stations_2.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'Range', 'ADDRESS': 'TextEdit', 'PARKNRIDE': 'TextEdit', 'STATIONNAM': 'TextEdit', 'LINENAME': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_WalkingRoute_3.set('fieldImages', {'OBJECTID': 'Range', 'PrimaryNam': 'TextEdit', 'ID': 'TextEdit', 'Status': 'TextEdit', 'Designated': 'TextEdit', 'SurfaceTyp': 'TextEdit', 'Class': 'TextEdit', 'CartoCode': 'TextEdit', 'OtherRestr': 'TextEdit', 'HorseAllow': 'TextEdit', 'MotorizedA': 'TextEdit', 'HikeDiffic': 'TextEdit', 'BikeDiffic': 'TextEdit', 'ADAAccessi': 'TextEdit', 'OwnerStewa': 'TextEdit', 'County': 'TextEdit', 'Recreation': 'TextEdit', 'SystemName': 'TextEdit', 'TransNetwo': 'TextEdit', 'Comments': 'TextEdit', 'DataSource': 'TextEdit', 'Unique_ID': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'SHAPE_Leng': 'TextEdit', 'OBJECTID_2': 'Range', 'STATUS_2': 'TextEdit', 'CARTOCODE_': 'TextEdit', 'FULLNAME': 'TextEdit', 'FROMADDR_L': 'Range', 'TOADDR_L': 'Range', 'FROMADDR_R': 'Range', 'TOADDR_R': 'Range', 'PARITY_L': 'TextEdit', 'PARITY_R': 'TextEdit', 'PREDIR': 'TextEdit', 'NAME': 'TextEdit', 'POSTTYPE': 'TextEdit', 'POSTDIR': 'TextEdit', 'AN_NAME': 'TextEdit', 'AN_POSTDIR': 'TextEdit', 'A1_PREDIR': 'TextEdit', 'A1_NAME': 'TextEdit', 'A1_POSTTYP': 'TextEdit', 'A1_POSTDIR': 'TextEdit', 'A2_PREDIR': 'TextEdit', 'A2_NAME': 'TextEdit', 'A2_POSTTYP': 'TextEdit', 'A2_POSTDIR': 'TextEdit', 'QUADRANT_L': 'TextEdit', 'QUADRANT_R': 'TextEdit', 'STATE_L': 'TextEdit', 'STATE_R': 'TextEdit', 'COUNTY_L': 'TextEdit', 'COUNTY_R': 'TextEdit', 'ADDRSYS_L': 'TextEdit', 'ADDRSYS_R': 'TextEdit', 'POSTCOMM_L': 'TextEdit', 'POSTCOMM_R': 'TextEdit', 'ZIPCODE_L': 'TextEdit', 'ZIPCODE_R': 'TextEdit', 'INCMUNI_L': 'TextEdit', 'INCMUNI_R': 'TextEdit', 'UNINCCOM_L': 'TextEdit', 'UNINCCOM_R': 'TextEdit', 'NBRHDCOM_L': 'TextEdit', 'NBRHDCOM_R': 'TextEdit', 'ER_CAD_ZON': 'TextEdit', 'ESN_L': 'TextEdit', 'ESN_R': 'TextEdit', 'MSAGCOMM_L': 'TextEdit', 'MSAGCOMM_R': 'TextEdit', 'ONEWAY': 'TextEdit', 'VERT_LEVEL': 'TextEdit', 'SPEED_LMT': 'Range', 'ACCESSCODE': 'TextEdit', 'DOT_HWYNAM': 'TextEdit', 'DOT_RTNAME': 'TextEdit', 'DOT_RTPART': 'TextEdit', 'DOT_F_MILE': 'TextEdit', 'DOT_T_MILE': 'TextEdit', 'DOT_FCLASS': 'TextEdit', 'DOT_SRFTYP': 'TextEdit', 'DOT_CLASS': 'TextEdit', 'DOT_OWN_L': 'TextEdit', 'DOT_OWN_R': 'TextEdit', 'DOT_AADT': 'Range', 'DOT_AADTYR': 'TextEdit', 'DOT_THRULA': 'Range', 'BIKE_L': 'TextEdit', 'BIKE_R': 'TextEdit', 'BIKE_PLN_L': 'TextEdit', 'BIKE_PLN_R': 'TextEdit', 'BIKE_REGPR': 'TextEdit', 'BIKE_NOTES': 'TextEdit', 'UNIQUE_ID_': 'TextEdit', 'LOCAL_UID': 'TextEdit', 'UTAHRD_UID': 'TextEdit', 'SOURCE': 'TextEdit', 'UPDATED': 'DateTime', 'EFFECTIVE': 'DateTime', 'EXPIRE': 'DateTime', 'CREATED': 'DateTime', 'CREATOR': 'TextEdit', 'EDITOR': 'TextEdit', 'CUSTOMTAGS': 'TextEdit', 'GlobalID': 'TextEdit', 'TDMNET_L': 'TextEdit', 'TDMNET_R': 'TextEdit', 'PED_L': 'TextEdit', 'PED_R': 'TextEdit', 'SHAPE_Le_1': 'TextEdit', });
lyr_MuralsSheet1_4.set('fieldImages', {'Business': 'TextEdit', 'Artist': 'TextEdit', 'Year': 'Range', 'Address': 'TextEdit', 'Lat': 'Hidden', 'Long': 'Hidden', });
lyr_MuralsBreweries_5.set('fieldImages', {'Name': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', });
lyr_LightRailLines_1.set('fieldLabels', {'FID': 'no label', 'LineAbbr': 'no label', 'LineName': 'no label', 'Frequency': 'no label', 'RouteType': 'no label', 'AvgBrd': 'no label', 'City': 'no label', 'County': 'no label', 'Shape__Len': 'no label', 'LineAbbr1': 'no label', });
lyr_Stations_2.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'ADDRESS': 'no label', 'PARKNRIDE': 'no label', 'STATIONNAM': 'no label', 'LINENAME': 'no label', 'STATUS': 'no label', });
lyr_WalkingRoute_3.set('fieldLabels', {'OBJECTID': 'no label', 'PrimaryNam': 'no label', 'ID': 'no label', 'Status': 'no label', 'Designated': 'no label', 'SurfaceTyp': 'no label', 'Class': 'no label', 'CartoCode': 'no label', 'OtherRestr': 'no label', 'HorseAllow': 'no label', 'MotorizedA': 'no label', 'HikeDiffic': 'no label', 'BikeDiffic': 'no label', 'ADAAccessi': 'no label', 'OwnerStewa': 'no label', 'County': 'no label', 'Recreation': 'no label', 'SystemName': 'no label', 'TransNetwo': 'no label', 'Comments': 'no label', 'DataSource': 'no label', 'Unique_ID': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'SHAPE_Leng': 'no label', 'OBJECTID_2': 'no label', 'STATUS_2': 'no label', 'CARTOCODE_': 'no label', 'FULLNAME': 'no label', 'FROMADDR_L': 'no label', 'TOADDR_L': 'no label', 'FROMADDR_R': 'no label', 'TOADDR_R': 'no label', 'PARITY_L': 'no label', 'PARITY_R': 'no label', 'PREDIR': 'no label', 'NAME': 'no label', 'POSTTYPE': 'no label', 'POSTDIR': 'no label', 'AN_NAME': 'no label', 'AN_POSTDIR': 'no label', 'A1_PREDIR': 'no label', 'A1_NAME': 'no label', 'A1_POSTTYP': 'no label', 'A1_POSTDIR': 'no label', 'A2_PREDIR': 'no label', 'A2_NAME': 'no label', 'A2_POSTTYP': 'no label', 'A2_POSTDIR': 'no label', 'QUADRANT_L': 'no label', 'QUADRANT_R': 'no label', 'STATE_L': 'no label', 'STATE_R': 'no label', 'COUNTY_L': 'no label', 'COUNTY_R': 'no label', 'ADDRSYS_L': 'no label', 'ADDRSYS_R': 'no label', 'POSTCOMM_L': 'no label', 'POSTCOMM_R': 'no label', 'ZIPCODE_L': 'no label', 'ZIPCODE_R': 'no label', 'INCMUNI_L': 'no label', 'INCMUNI_R': 'no label', 'UNINCCOM_L': 'no label', 'UNINCCOM_R': 'no label', 'NBRHDCOM_L': 'no label', 'NBRHDCOM_R': 'no label', 'ER_CAD_ZON': 'no label', 'ESN_L': 'no label', 'ESN_R': 'no label', 'MSAGCOMM_L': 'no label', 'MSAGCOMM_R': 'no label', 'ONEWAY': 'no label', 'VERT_LEVEL': 'no label', 'SPEED_LMT': 'no label', 'ACCESSCODE': 'no label', 'DOT_HWYNAM': 'no label', 'DOT_RTNAME': 'no label', 'DOT_RTPART': 'no label', 'DOT_F_MILE': 'no label', 'DOT_T_MILE': 'no label', 'DOT_FCLASS': 'no label', 'DOT_SRFTYP': 'no label', 'DOT_CLASS': 'no label', 'DOT_OWN_L': 'no label', 'DOT_OWN_R': 'no label', 'DOT_AADT': 'no label', 'DOT_AADTYR': 'no label', 'DOT_THRULA': 'no label', 'BIKE_L': 'no label', 'BIKE_R': 'no label', 'BIKE_PLN_L': 'no label', 'BIKE_PLN_R': 'no label', 'BIKE_REGPR': 'no label', 'BIKE_NOTES': 'no label', 'UNIQUE_ID_': 'no label', 'LOCAL_UID': 'no label', 'UTAHRD_UID': 'no label', 'SOURCE': 'no label', 'UPDATED': 'no label', 'EFFECTIVE': 'no label', 'EXPIRE': 'no label', 'CREATED': 'no label', 'CREATOR': 'no label', 'EDITOR': 'no label', 'CUSTOMTAGS': 'no label', 'GlobalID': 'no label', 'TDMNET_L': 'no label', 'TDMNET_R': 'no label', 'PED_L': 'no label', 'PED_R': 'no label', 'SHAPE_Le_1': 'no label', });
lyr_MuralsSheet1_4.set('fieldLabels', {'Business': 'inline label', 'Artist': 'inline label', 'Year': 'inline label', 'Address': 'inline label', });
lyr_MuralsBreweries_5.set('fieldLabels', {'Name': 'no label', 'Long': 'no label', 'Lat': 'no label', });
lyr_MuralsBreweries_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});