let starRating = ( function() {
  let starRating = function(args) {
    let self = this;
    self.container = jQuery( '#' + args.containerId );
				self.containerId = args.containerId;
				self.starClass = 'sr-star' + args.containerId;
				self.starWidth = args.starWidth;
				self.starHeight = args.starHeight;
				self.containerWidth = args.starWidth * 5;
				self.ratingPercent = args.ratingPercent;
				self.newRating = 0;

    self.draw();

    if ( typeof args.onRate !== 'undefined' ) { // bind custom function
      self.onRate = args.onRate;
      }

    jQuery( '.' + self.starClass ).on( 'mouseover', function() {
      var percentWidth = 20 * jQuery( this ).data( 'stars' );

      // set the percent width  of the star bar to the new mouseover width
      $( '.sr-star-bar' + self.containerId ).css( 'width', percentWidth + '%' );
    });

    jQuery( '.' + self.starClass ).on( 'mouseout', function() { // mouseout of a star
      // return the star rating system percent to its previous percent on mouse out of any star
      jQuery( '.sr-star-bar' + self.containerId ).css( 'width', self.ratingPercent );
    });

    jQuery( '.' + self.starClass ).on( 'click', function() { // click on a star
      // ner rating set to the number of stars the user clicked on
      self.newRating = jQuery( this ).data( 'stars' );

      // determine the percent width based on the stars clicked on
      var percentWidth = 20 * jQuery( this ).data( 'stars' );

      // new rating percent is the number of stars clicked on
      self.ratingPercent = percentWidth + '%';

      // set new star bar percent width
      $( '.sr-star-bar' + self.containerId ).css( 'width', percentWidth + '%' );

      // run the on rate function passed in when the object was created
      self.onRate();
    } );	

  };

  /**
			 * Draw html out to the page
			 *
			 * @param void
			 *
			 * @return void
			 */
  starRating.prototype.draw = function() {
    var self = this;
    var pointerStyle = ( self.canRate ? 'cursor:pointer' : '' );
    var starImg = '<img src="asset/stella.svg" style="width:' + self.starWidth + 'px" />';
    var html = '<div style="width:' + self.containerWidth + 'px;height:' + self.starHeight + 'px;position:relative;' + pointerStyle + '">';

    // create the progress bar that sits behinde the png star outlines
    html += '<div class="sr-star-bar' + self.containerId + '" style="width:' + self.ratingPercent + ';background:linear-gradient(0deg, #ffe600, #ffc900);height:100%;position:absolute"></div>';

    for ( var i = 0; i < 5; i++ ) { // add each star to the page
      var currStarStyle = 'position:absolute;margin-left:' + self.starWidth * i + 'px';
      html += '<div class="' + self.starClass + '" data-stars="' + ( i + 1 ) + '" style="' + currStarStyle + '">' + 
        starImg + 
      '</div>';
    }

    html += '</div>';

    // write out to the dom
    self.container.html( html );
  };

  // return it all!
  return starRating;
} )();

/* funzioni stelle */
$( function () {
  let rating2 = new starRating( {
    containerId: 'star_rating2',
    starWidth: 100,
    starHeight: 100,
    ratingPercent: '20%',
    canRate: true,
    onRate: function() {
      console.log( rating2 );
    }
  } );


  let rating3 = new starRating( {
    containerId: 'star_rating3',
    starWidth: 100,
    starHeight: 100,
    ratingPercent: '20%',
    canRate: true,
    onRate: function() {
      console.log( rating3 );
    }
  } );


  let rating4 = new starRating( {
    containerId: 'star_rating4',
    starWidth: 100,
    starHeight: 100,
    ratingPercent: '20%',
    canRate: true,
    onRate: function() {
      console.log( rating4 );
    }
  } );


  let rating6 = new starRating( {
    containerId: 'star_rating6',
    starWidth: 100,
    starHeight: 100,
    ratingPercent: '20%',
    canRate: true,
    onRate: function() {
      console.log( rating6 );
    }
  } );
});