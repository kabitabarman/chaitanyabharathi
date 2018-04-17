import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      title: 'Football Match',
      thumbnail: '/assets/images/gallery/Football 1.jpg',
      image: '/assets/images/gallery/Football 1.jpg'
    }, {
      title: 'Football Match',
      thumbnail: '/assets/images/gallery/Football 2.jpg',
      image: '/assets/images/gallery/Football 2.jpg'
    }, {
      title: 'Football Match',
      thumbnail: '/assets/images/gallery/Football 3.jpg',
      image: '/assets/images/gallery/Football 3.jpg'
    }, {
      title: 'Football Match',
      thumbnail: '/assets/images/gallery/Football 4.jpg',
      image: '/assets/images/gallery/Football 4.jpg'
    }, {
      title: 'Saraswati puja celebrations',
      thumbnail: '/assets/images/gallery/Saraswati puja celebrations 1.jpg',
      image: '/assets/images/gallery/Saraswati puja celebrations 1.jpg'
    }, {
      title: 'Saraswati puja celebrations',
      thumbnail: '/assets/images/gallery/Saraswati puja celebrations 2.jpg',
      image: '/assets/images/gallery/Saraswati puja celebrations 2.jpg'
    }, {
      title: 'Teachers day celebrations',
      thumbnail: "/assets/images/gallery/Teachers day celebrations 1.jpg",
      image: "/assets/images/gallery/Teachers day celebrations 1.jpg"
    }, {
      title: 'Teachers day celebrations',
      thumbnail: "/assets/images/gallery/Teachers day celebrations 2.jpg",
      image: "/assets/images/gallery/Teachers day celebrations 2.jpg"
    }, {
      title: 'Our Academic Team',
      thumbnail: '/assets/images/gallery/Our Academic Team.jpg',
      image: '/assets/images/gallery/Our Academic Team.jpg'
    }, {
      title: 'Boys hostel',
      thumbnail: '/assets/images/gallery/Boys hostel.jpg',
      image: '/assets/images/gallery/Boys hostel.jpg'
    }, {
      title: 'Girls hostel',
      thumbnail: '/assets/images/gallery/Girls hostel.jpg',
      image: '/assets/images/gallery/Girls hostel.jpg'
    }];
  }
});
