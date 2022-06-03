# bizan
Test of 3D visualization



# Sources
* Basemap
	* GSI Maps Vector 地理院地図Vector（仮称）
        * style: https://github.com/gsi-cyberjapan/gsivectortile-mapbox-gl-js/blob/master/std.json

* 3D Terrain (RGB Elevation)
	* RGB Elevation tile derived from ALOS World 3D - 30m (AW3D30)

* Application layer 1: 日本シームレス地質図WMTS配信サービス
	* Geological Maps (Geological Survey of Japan ):  https://gbank.gsj.jp/seamless/wmts/wmts.html 
	* Tile URL: https://gbank.gsj.jp/seamless/tilemap/detailed/g/{z}/{y}/{x}.png
* Application layer 2: Aearial photo
	* Geospatial Information Authority of Japan https://maps.gsi.go.jp/development/ichiran.html
	* Tile URL: https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg

# Map Plugin