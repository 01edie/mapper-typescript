export interface Pointable {
  location: {
    lat: number;
    lng: number;
  };
  contentSummary():string
}

export class CustomMap {
  private map: google.maps.Map;

  constructor(divId: string) {
    this.map = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }
  addMarker(pointable: Pointable): void {
    const marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: pointable.location.lat,
        lng: pointable.location.lng,
      },
    });
    marker.addListener('click',()=>{
        const infoWindow = new google.maps.InfoWindow({
            content: pointable.contentSummary()
        })
        infoWindow.open(this.map, marker)
    })
  }
}
