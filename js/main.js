$(document).ready(function() {
    var fonts, serif, sansSerif, handwriting, display, monospace, fontsViewed, fontsSaved, fontFaceStatus, fontSelected, currentFont;

    serif = ['Abhaya Libre', 'Adamina', 'Alegreya', 'Alegreya SC', 'Alice', 'Alike', 'Alike Angular', 'Almendra', 'Almendra SC', 'Amethysta', 'Amiri', 'Andada', 'Antic Didone', 'Antic Slab', 'Arapey', 'Arbutus Slab', 'Aref Ruqaa', 'Artifika', 'Arvo', 'Asar', 'Average', 'Balthazar', 'Belgrano', 'Bellefair', 'Bentham', 'BioRhyme', 'BioRhyme Expanded', 'Bitter', 'Brawler', 'Bree Serif', 'Buenard', 'Cambo', 'Cantata One', 'Cardo', 'Caudex', 'Cinzel', 'Copse', 'Cormorant', 'Cormorant Garamond', 'Cormorant Infant', 'Cormorant SC', 'Cormorant Unicase', 'Cormorant Upright', 'Coustard', 'Crete Round', 'Crimson Text', 'Cutive', 'David Libre', 'Della Respira', 'Domine', 'Donegal One', 'Droid Serif', 'EB Garamond', 'Eczar', 'Enriqueta', 'Esteban', 'Fanwood Text', 'Fasthand', 'Fauna One', 'Faustina', 'Fenix', 'Fjord One', 'Frank Ruhl Libre', 'GFS Didot', 'Gabriela', 'Gentium Basic', 'Gentium Book Basic', 'Gilda Display', 'Glegoo', 'Goudy Bookletter 1911', 'Gurajada', 'Habibi', 'Halant', 'Hanuman', 'Headland One', 'Holtwood One SC', 'IM Fell DW Pica', 'IM Fell DW Pica SC', 'IM Fell Double Pica', 'IM Fell Double Pica SC', 'IM Fell English', 'IM Fell English SC', 'IM Fell French Canon', 'IM Fell French Canon SC', 'IM Fell Great Primer', 'IM Fell Great Primer SC', 'Inika', 'Inknut Antiqua', 'Italiana', 'Jacques Francois', 'Josefin Slab', 'Judson', 'Junge', 'Kadwa', 'Kameron', 'Karma', 'Kotta One', 'Kreon', 'Kurale', 'Laila', 'Ledger', 'Libre Baskerville', 'Linden Hill', 'Lora', 'Lusitana', 'Lustria', 'Maitree', 'Manuale', 'Marcellus', 'Marcellus SC', 'Marko One', 'Martel', 'Mate', 'Mate SC', 'Merriweather', 'Montaga', 'Neuton', 'Nokora', 'Noticia Text', 'Noto Serif', 'Old Standard TT', 'Oranienbaum', 'Ovo', 'PT Serif', 'PT Serif Caption', 'Peddana', 'Petrona', 'Playfair Display', 'Playfair Display SC', 'Podkova', 'Poly', 'Port Lligat Slab', 'Prata', 'Pridi', 'Prociono', 'Quando', 'Quattrocento', 'Radley', 'Ramaraja', 'Rasa', 'Rhodium Libre', 'Roboto Slab', 'Rokkitt', 'Rosarivo', 'Rozha One', 'Rufina', 'Sahitya', 'Sanchez', 'Scheherazade', 'Scope One', 'Slabo 13px', 'Slabo 27px', 'Sorts Mill Goudy', 'Source Serif Pro', 'Spectral', 'Sree Krushnadevaraya', 'Stoke', 'Suez One', 'Sumana', 'Sura', 'Suranna', 'Suravaram', 'Taviraj', 'Tienne', 'Tinos', 'Trirong', 'Trocchi', 'Trykker', 'Ultra', 'Unna', 'Vesper Libre', 'Vidaloka', 'Volkhov', 'Vollkorn', 'Yrsa', 'Zilla Slab'];

    sansSerif = ['ABeeZee', 'Abel', 'Aclonica', 'Acme', 'Actor', 'Advent Pro', 'Aldrich', 'Alef', 'Alegreya Sans', 'Alegreya Sans SC', 'Allerta', 'Allerta Stencil', 'Amaranth', 'Amiko', 'Anaheim', 'Andika', 'Antic', 'Anton', 'Archivo', 'Archivo Black', 'Archivo Narrow', 'Arimo', 'Armata', 'Arsenal', 'Arya', 'Asap', 'Asap Condensed', 'Assistant', 'Asul', 'Athiti', 'Average Sans', 'Basic', 'Belleza', 'BenchNine', 'Biryani', 'Bubbler One', 'Cabin', 'Cabin Condensed', 'Cagliostro', 'Cairo', 'Cambay', 'Candal', 'Cantarell', 'Cantora One', 'Capriola', 'Carme', 'Carrois Gothic', 'Carrois Gothic SC', 'Catamaran', 'Changa', 'Chathura', 'Chau Philomene One', 'Chivo', 'Coda Caption', 'Convergence', 'Cuprum', 'Days One', 'Denk One', 'Dhurjati', 'Didact Gothic', 'Doppio One', 'Dorsa', 'Dosis', 'Droid Sans', 'Duru Sans', 'Economica', 'El Messiri', 'Electrolize', 'Encode Sans', 'Encode Sans Condensed', 'Encode Sans Expanded', 'Encode Sans Semi Condensed', 'Encode Sans Semi Expanded', 'Englebert', 'Exo', 'Exo 2', 'Federo', 'Fira Sans', 'Fira Sans Condensed', 'Fira Sans Extra Condensed', 'Fjalla One', 'Francois One', 'Fresca', 'GFS Neohellenic', 'Gafata', 'Galdeano', 'Geo', 'Gidugu', 'Gudea', 'Hammersmith One', 'Harmattan', 'Heebo', 'Hind', 'Hind Guntur', 'Hind Madurai', 'Hind Siliguri', 'Hind Vadodara', 'Homenaje', 'Imprima', 'Inder', 'Istok Web', 'Jaldi', 'Jockey One', 'Josefin Sans', 'Julius Sans One', 'Jura', 'Kanit', 'Kantumruy', 'Karla', 'Khand', 'Khula', 'Kite One', 'Krona One', 'Lato', 'Lekton', 'Libre Franklin', 'Mada', 'Magra', 'Mako', 'Mallanna', 'Mandali', 'Marmelad', 'Martel Sans', 'Marvel', 'Maven Pro', 'Meera Inimai', 'Merriweather Sans', 'Metrophobic', 'Michroma', 'Miriam Libre', 'Mitr', 'Molengo', 'Monda', 'Montserrat', 'Montserrat Alternates', 'Montserrat Subrayada', 'Mouse Memoirs', 'Mukta', 'Mukta Mahee', 'Mukta Malar', 'Mukta Vaani', 'Muli', 'NTR', 'News Cycle', 'Nobile', 'Noto Sans', 'Numans', 'Nunito', 'Nunito Sans', 'Open Sans', 'Open Sans Condensed', 'Orbitron', 'Orienta', 'Oswald', 'Overpass', 'Oxygen', 'PT Sans', 'PT Sans Caption', 'PT Sans Narrow', 'Padauk', 'Palanquin', 'Palanquin Dark', 'Pathway Gothic One', 'Pattaya', 'Pavanam', 'Paytone One', 'Philosopher', 'Play', 'Pontano Sans', 'Poppins', 'Port Lligat Sans', 'Pragati Narrow', 'Prompt', 'Proza Libre', 'Puritan', 'Quantico', 'Quattrocento Sans', 'Questrial', 'Quicksand', 'Rajdhani', 'Raleway', 'Ramabhadra', 'Rambla', 'Rationale', 'Reem Kufi', 'Roboto', 'Roboto Condensed', 'Ropa Sans', 'Rosario', 'Rubik', 'Rubik Mono One', 'Ruda', 'Ruluko', 'Rum Raisin', 'Russo One', 'Saira', 'Saira Condensed', 'Saira Extra Condensed', 'Saira Semi Condensed', 'Sansita', 'Sarala', 'Sarpanch', 'Scada', 'Secular One', 'Seymour One', 'Shanti', 'Share Tech', 'Signika', 'Signika Negative', 'Sintony', 'Six Caps', 'Snippet', 'Source Sans Pro', 'Spinnaker', 'Strait', 'Syncopate', 'Tauri', 'Teko', 'Telex', 'Tenali Ramakrishna', 'Tenor Sans', 'Text Me One', 'Timmana', 'Titillium Web', 'Ubuntu', 'Ubuntu Condensed', 'Varela', 'Varela Round', 'Viga', 'Voltaire', 'Wendy One', 'Wire One', 'Work Sans', 'Yanone Kaffeesatz', 'Yantramanav', ];

    monospace = ['Anonymous Pro', 'Cousine', 'Cutive Mono', 'Droid Sans Mono', 'Fira Mono', 'Inconsolata', 'Nova Mono', 'Overpass Mono', 'Oxygen Mono', 'PT Mono', 'Roboto Mono', 'Share Tech Mono', 'Source Code Pro', 'Space Mono', 'Ubuntu Mono', 'VT323'];

    display = ['Abril Fatface', 'Akronim', 'Alfa Slab One', 'Allan', 'Almendra Display', 'Amarante', 'Amatica SC', 'Angkor', 'Arbutus', 'Arima Madurai', 'Asset', 'Astloch', 'Atma', 'Atomic Age', 'Aubrey', 'Audiowide', 'Autour One', 'Averia Gruesa Libre', 'Averia Libre', 'Averia Sans Libre', 'Averia Serif Libre', 'Bahiana', 'Baloo', 'Baloo Bhai', 'Baloo Bhaijaan', 'Baloo Bhaina', 'Baloo Chettan', 'Baloo Da', 'Baloo Paaji', 'Baloo Tamma', 'Baloo Tammudu', 'Baloo Thambi', 'Bangers', 'Barrio', 'Battambang', 'Baumans', 'Bayon', 'Bevan', 'Bigelow Rules', 'Bigshot One', 'Black Ops One', 'Bokor', 'Boogaloo', 'Bowlby One', 'Bowlby One SC', 'Bubblegum Sans', 'Buda', 'Bungee', 'Bungee Hairline', 'Bungee Inline', 'Bungee Outline', 'Bungee Shade', 'Butcherman', 'Cabin Sketch', 'Caesar Dressing', 'Carter One', 'Ceviche One', 'Changa One', 'Chango', 'Chela One', 'Chelsea Market', 'Chenla', 'Cherry Cream Soda', 'Cherry Swash', 'Chewy', 'Chicle', 'Chonburi', 'Cinzel Decorative', 'Coda', 'Codystar', 'Coiny', 'Combo', 'Comfortaa', 'Concert One', 'Content', 'Contrail One', 'Corben', 'Creepster', 'Croissant One', 'Crushed', 'Dangrek', 'Diplomata', 'Diplomata SC', 'Dynalight', 'Eater', 'Elsie', 'Elsie Swash Caps', 'Emblema One', 'Emilys Candy', 'Erica One', 'Ewert', 'Expletus Sans', 'Farsan', 'Fascinate', 'Fascinate Inline', 'Faster One', 'Federant', 'Finger Paint', 'Flamenco', 'Flavors', 'Fontdiner Swanky', 'Forum', 'Freckle Face', 'Fredericka the Great', 'Fredoka One', 'Freehand', 'Frijole', 'Fruktur', 'Fugaz One', 'Galada', 'Galindo', 'Geostar', 'Geostar Fill', 'Germania One', 'Glass Antiqua', 'Goblin One', 'Gorditas', 'Graduate', 'Gravitas One', 'Griffy', 'Gruppo', 'Hanalei', 'Hanalei Fill', 'Happy Monkey', 'Henny Penny', 'Iceberg', 'Iceland', 'Irish Grover', 'Jacques Francois Shadow', 'Jolly Lodger', 'Jomhuria', 'Joti One', 'Katibeh', 'Kavoon', 'Kdam Thmor', 'Keania One', 'Kelly Slab', 'Kenia', 'Khmer', 'Knewave', 'Koulen', 'Kranky', 'Kumar One', 'Kumar One Outline', 'Lalezar', 'Lancelot', 'Lemon', 'Lemonada', 'Libre Barcode 128', 'Libre Barcode 128 Text', 'Libre Barcode 39', 'Libre Barcode 39 Extended', 'Libre Barcode 39 Extended Text', 'Libre Barcode 39 Text', 'Life Savers', 'Lilita One', 'Lily Script One', 'Limelight', 'Lobster', 'Lobster Two', 'Londrina Outline', 'Londrina Shadow', 'Londrina Sketch', 'Londrina Solid', 'Love Ya Like A Sister', 'Luckiest Guy', 'Macondo', 'Macondo Swash Caps', 'Maiden Orange', 'Margarine', 'McLaren', 'MedievalSharp', 'Medula One', 'Megrim', 'Metal', 'Metal Mania', 'Metamorphous', 'Milonga', 'Miltonian', 'Miltonian Tattoo', 'Miniver', 'Mirza', 'Modak', 'Modern Antiqua', 'Mogra', 'Monofett', 'Monoton', 'Moul', 'Moulpali', 'Mountains of Christmas', 'Mystery Quest', 'New Rocker', 'Nixie One', 'Nosifer', 'Nova Cut', 'Nova Flat', 'Nova Oval', 'Nova Round', 'Nova Script', 'Nova Slim', 'Nova Square', 'Odor Mean Chey', 'Offside', 'Oldenburg', 'Oleo Script', 'Oleo Script Swash Caps', 'Oregano', 'Original Surfer', 'Overlock', 'Overlock SC', 'Paprika', 'Passero One', 'Passion One', 'Patua One', 'Peralta', 'Piedra', 'Pirata One', 'Plaster', 'Playball', 'Poiret One', 'Poller One', 'Pompiere', 'Preahvihear', 'Press Start 2P', 'Prosto One', 'Purple Purse', 'Racing Sans One', 'Rakkas', 'Raleway Dots', 'Rammetto One', 'Ranchers', 'Ranga', 'Ravi Prakash', 'Revalia', 'Ribeye', 'Ribeye Marrow', 'Righteous', 'Risque', 'Ruslan Display', 'Rye', 'Sail', 'Salsa', 'Sancreek', 'Sarina', 'Seaweed Script', 'Sevillana', 'Share', 'Shojumaru', 'Shrikhand', 'Siemreap', 'Sigmar One', 'Simonetta', 'Sirin Stencil', 'Skranji', 'Slackey', 'Smokum', 'Smythe', 'Sniglet', 'Snowburst One', 'Sofadi One', 'Sonsie One', 'Special Elite', 'Spicy Rice', 'Spirax', 'Squada One', 'Stalinist One', 'Stardos Stencil', 'Stint Ultra Condensed', 'Stint Ultra Expanded', 'Supermercado One', 'Suwannaphum', 'Taprom', 'Titan One', 'Trade Winds', 'Trochut', 'Tulpen One', 'Uncial Antiqua', 'Underdog', 'Unica One', 'UnifrakturCook', 'UnifrakturMaguntia', 'Unkempt', 'Unlock', 'Vampiro One', 'Vast Shadow', 'Voces', 'Wallpoet', 'Warnes', 'Wellfleet', 'Yatra One', 'Yeseva One', 'Zilla Slab Highlight'];

    handwriting = ['Aguafina Script', 'Aladin', 'Alex Brush', 'Allura', 'Amatic SC', 'Amita', 'Annie Use Your Telescope', 'Architects Daughter', 'Arizonia', 'Bad Script', 'Berkshire Swash', 'Bilbo', 'Bilbo Swash Caps', 'Bonbon', 'Butterfly Kids', 'Calligraffitti', 'Caveat', 'Caveat Brush', 'Cedarville Cursive', 'Clicker Script', 'Coming Soon', 'Condiment', 'Cookie', 'Courgette', 'Covered By Your Grace', 'Crafty Girls', 'Damion', 'Dancing Script', 'Dawning of a New Day', 'Dekko', 'Delius', 'Delius Swash Caps', 'Delius Unicase', 'Devonshire', 'Dr Sugiyama', 'Eagle Lake', 'Engagement', 'Euphoria Script', 'Felipa', 'Fondamento', 'Give You Glory', 'Gloria Hallelujah', 'Gochi Hand', 'Grand Hotel', 'Great Vibes', 'Handlee', 'Herr Von Muellerhoff', 'Homemade Apple', 'Indie Flower', 'Italianno', 'Itim', 'Jim Nightshade', 'Julee', 'Just Another Hand', 'Just Me Again Down Here', 'Kalam', 'Kaushan Script', 'Kavivanar', 'Kristi', 'La Belle Aurore', 'Lakki Reddy', 'Lateef', 'League Script', 'Leckerli One', 'Loved by the King', 'Lovers Quarrel', 'Marck Script', 'Meddon', 'Meie Script', 'Merienda', 'Merienda One', 'Miss Fajardose', 'Molle', 'Monsieur La Doulaise', 'Montez', 'Mr Bedfort', 'Mr Dafoe', 'Mr De Haviland', 'Mrs Saint Delafield', 'Mrs Sheppards', 'Neucha', 'Niconne', 'Norican', 'Nothing You Could Do', 'Over the Rainbow', 'Pacifico', 'Pangolin', 'Parisienne', 'Patrick Hand', 'Patrick Hand SC', 'Permanent Marker', 'Petit Formal Script', 'Pinyon Script', 'Princess Sofia', 'Quintessential', 'Qwigley', 'Rancho', 'Redressed', 'Reenie Beanie', 'Rochester', 'Rock Salt', 'Romanesco', 'Rouge Script', 'Ruge Boogie', 'Ruthie', 'Sacramento', 'Satisfy', 'Schoolbell', 'Sedgwick Ave', 'Sedgwick Ave Display', 'Shadows Into Light', 'Shadows Into Light Two', 'Short Stack', 'Sofia', 'Sriracha', 'Stalemate', 'Sue Ellen Francisco', 'Sunshiney', 'Swanky and Moo Moo', 'Tangerine', 'The Girl Next Door', 'Tillana', 'Vibur', 'Waiting for the Sunrise', 'Walter Turncoat', 'Yellowtail', 'Yesteryear', 'Zeyada'];

    var pangrams, hamburger, fontName, rightArrow, leftArrow, settingsWindow, textBox, bookmarks, bookmarkIcon, codeBlock;
    pangrams = ['The quick brown fox jumps over the lazy dog', 'Sphinx of black quartz, judge my vow.', 'The five boxing wizards jump quickly', 'Pack my box with five dozen liquor jugs.', 'Jived fox nymph grabs quick waltz.'];
    hamburger = $('.hamburger');
    fontName = $('.fontname');
    rightArrow = $('.arrow-right');
    leftArrow = $('.arrow-left');
    settingsWindow = $('.settings');
    textBox = $('.input');
    bookmarks = $('[data-bookmarks]');
    bookmarkIcon = $('.bookmark-collection');
    codeBlock = $('.code-block');


    // Font Specific Functions

    fonts = [serif, sansSerif, monospace, handwriting, display];
    fontFaceStatus = [true, true, true, true, true];
    fontSelected = [];
    fontsViewed = [];
    fontsSaved = [];


    function loadFonts() {
        var fontCdn = '';
        for (var i = 0; i < fonts.length; i++) {
            for (var j = 0; j < fonts[i].length; j++) {
                fontCdn += fonts[i][j].split(' ').join('+') + '|';
            };
        }

        $('<link href="https://fonts.googleapis.com/css?family=' + fontCdn + '" rel="stylesheet" fontl>').insertAfter($('link[fontcdn]'));
        // console.log($('[fontl]'));
    }
    loadFonts();

    function checkFontStatus() {
        if (document.getElementById('serif').checked == true) {
            fontFaceStatus[0] = true;
        } else {
            fontFaceStatus[0] = false;
        }
        if (document.getElementById('sans-serif').checked == true) {
            fontFaceStatus[1] = true;
        } else {
            fontFaceStatus[1] = false;
        }
        if (document.getElementById('monospace').checked == true) {
            fontFaceStatus[2] = true;
        } else {
            fontFaceStatus[2] = false;
        }
        if (document.getElementById('handwriting').checked == true) {
            fontFaceStatus[3] = true;
        } else {
            fontFaceStatus[3] = false;
        }
        if (document.getElementById('display').checked == true) {
            fontFaceStatus[4] = true;
        } else {
            fontFaceStatus[4] = false;
        }

        updateFontList();
    }

    function updateFontList() {
        if (fontFaceStatus[0]) {
            if ($.inArray(serif, fontSelected) === -1) {
                fontSelected.push(serif);
            }
        } else {
            if ($.inArray(serif, fontSelected) !== -1) {
                var index = fontSelected.indexOf(serif);
                fontSelected.splice(index, 1);
            }
        }

        if (fontFaceStatus[1]) {
            if ($.inArray(sansSerif, fontSelected) === -1) {
                fontSelected.push(sansSerif);
            }
        } else {
            if ($.inArray(sansSerif, fontSelected) !== -1) {
                var index = fontSelected.indexOf(sansSerif);
                fontSelected.splice(index, 1);
            }
        }

        if (fontFaceStatus[2]) {
            if ($.inArray(monospace, fontSelected) === -1) {
                fontSelected.push(monospace);
            }
        } else {
            if ($.inArray(monospace, fontSelected) !== -1) {
                var index = fontSelected.indexOf(monospace);
                fontSelected.splice(index, 1);
            }
        }

        if (fontFaceStatus[3]) {
            if ($.inArray(handwriting, fontSelected) === -1) {
                fontSelected.push(handwriting);
            }
        } else {
            if ($.inArray(handwriting, fontSelected) !== -1) {
                var index = fontSelected.indexOf(handwriting);
                fontSelected.splice(index, 1);
            }
        }

        if (fontFaceStatus[4]) {
            if ($.inArray(display, fontSelected) === -1) {
                fontSelected.push(display);
            }
        } else {
            if ($.inArray(display, fontSelected) !== -1) {
                var index = fontSelected.indexOf(display);
                fontSelected.splice(index, 1);
            }
        }

        if (fontSelected.length === 0) {
            fontSelected.push(serif, sansSerif, monospace, handwriting, display);
        }
    }

    function generateFont() {
        var l = fontSelected.length;
        var rand1 = Math.floor(Math.random() * l);
        var lengthOfInnerArr = fontSelected[rand1].length;
        var rand2 = Math.floor(Math.random() * lengthOfInnerArr);
        currentFont = fontSelected[rand1][rand2];

        // updating the font of the textbox and at the bookmark label section

        textBox.css('font-family', currentFont);
        fontName.text(currentFont);

        //adding font to history and removing it from the current array
        fontsViewed.push(currentFont);
        fontSelected[rand1].splice(rand2, 1);
    }

    function previousFont() {
        textBox.css('font-family', fontsViewed[fontsViewed.length - 2]);
        fontName.text(fontsViewed[fontsViewed.length - 2]);
    }

    function updateSavedFontList() {
        var fontListText = 'https://fonts.googleapis.com/css?family=';
        for (var i = 0; i < fontsSaved.length; i++) {
            if (fontsSaved.length - i > 1) {
                fontListText += fontsSaved[i].split(' ').join('+') + '|';
            } else {
                fontListText += fontsSaved[i].split(' ').join('+');
            }
        }
        codeBlock.text(fontListText);
    }

    function createBookmarkBadges() {
        $('.bookmark-badges').html('');
        for (var i = 0; i < fontsSaved.length; i++) {
            $('<span class="bookmark-badge">' + fontsSaved[i] + '</span>').appendTo('.bookmark-badges');
        }
        console.log('hello');
    }

    // Main Body

    /**
     * Change the grid classes of the footer
     */

    if ($(this).width() < 768) {
        leftArrow.parent().parent().removeClass('col-1').addClass('col-2');
        hamburger.parent().removeClass('col-1').addClass('col-3');
        bookmarkIcon.parent().removeClass('col-1').addClass('col-3');
        $('.outro span').text('Click to continue or exit.');
    } else {
        leftArrow.parent().removeClass('col-3').addClass('col-1');
    }

    /**
     * Paragraph/Heading Toggle
     */

    $('.input.para').hide();

    $('.switch-label').on('click', function(e) {
        $(this).toggleClass('checked');

        if ($(this).hasClass('checked')) {
            $('.input').hide();
            $('.input.para').show();
        } else {
            $('.input').show();
            $('.input.para').hide();
        }
    });

    /**
     * Set the max height of the body to 100% if settings has the open class
     */

    if (settingsWindow.hasClass('open')) {
        $(document).css({
            'height': $(document).height(),
            'width': $(document).width(),
        })
    }

    /**
     * Implementing the feature to open the settings window if the icon is clicked
     */

    $('.settings-icon').on('click', function() {
        settingsWindow.addClass('open');
    })

    /**
     * Close settings
     */

    $(this).on('keyup', function(event) {
        if (event.keyCode === 32 && settingsWindow.hasClass('open')) {
            settingsWindow.removeClass('open');
            checkFontStatus();
        }
    });

    $('.outro').on('click', function() {
        settingsWindow.removeClass('open');
        checkFontStatus();
    });

    /**
     * Run the function font status whenever the checkbox vaue changes
     */

    $('input[type=checkbox]').on('change', 'input', function(event) {
        checkFontStatus();
    })

    /**
     * Check if textbox has focus
     */

    textBox.on('focus', function() {
        textBox.addClass('focused');
    });

    textBox.on('blur', function() {
        textBox.removeClass('focused');
    });

    /**
     * Update the font of the textbox on click of next icon
     */

    rightArrow.on('click', function(e) {
        generateFont();
    });

    $(this).on('keyup', function(e) {
        if ((e.keyCode === 39 || e.keyCode === 32 || e.keyCode === 13) && !(settingsWindow.hasClass('open')) && !(textBox.hasClass('focused'))) {
            generateFont();
        }
    })

    /**
     * Show the previous font when the left arrow is clicked
     */

    leftArrow.on('click', previousFont);
    $(this).on('keyup', function(e) {
        if (e.keyCode === 37 || e.keyCode === 8 && !(textBox.hasClass('focused'))) {
            previousFont();
        }
    });

    /*
     *** Implement the bookmark feature ***
     */
    fontName.on('click', function(e) {
        if (fontsSaved.indexOf($(this).text()) === -1) {
            fontsSaved.push($(this).text());
            bookmarks.attr('data-bookmarks', fontsSaved.length);
        } else {
            // if (fontsSaved.indexOf(currentFont) !== 1) {
            var i = fontsSaved.indexOf($(this).text());
            fontsSaved.splice(i, 1);
            bookmarks.attr('data-bookmarks', fontsSaved.length);
            // }
        }
        bookmarks.attr('data-bookmarks', fontsSaved.length);
        bookmarks.text(bookmarks.attr('data-bookmarks'));
    });

    /**
     * Feature for copying the code blocks
     */

    new Clipboard('.code-block');

    codeBlock.on('click', function() {
        $(this).next('span').text('Link Copied successfully').delay(2000).fadeOut();
    });

    /*
     *** Hiding the left arrow if the fontsViewed variable is empty ***
     */

    // leftArrow.css('opacity', '0.4');

    /**
     * Navigation Bar, Bookmark Window Toggle
     */

    $('.hamburger').on('click', function(e) {
        $('.overlay-nav').addClass('open');
        $('.wrapper').addClass('scale-down');
    });

    $('.cross').on('click', function(e) {
        codeBlock.next().text('');
        $('.overlay-nav, .bookmark-window').removeClass('open');
        $('.wrapper').removeClass('scale-down');
    })

    /**
     * Opening the bookmark window
     */

    bookmarkIcon.on('click', function() {
        updateSavedFontList();
        createBookmarkBadges();

        if (fontsSaved.length > 0) {
            codeBlock.fadeIn('fast');
            $('.description').text('Click to view the font. Double click to remove it.');
        } else {
            codeBlock.fadeOut('fast');
            $('.description').text('No fonts bookmarked. Bookmark fonts by clicking on the font name');
        }
        $('.bookmark-window').addClass('open');
        $('.wrapper').addClass('scale-down');
    });

    /**
     * Deleting the bookmark badges from the bookmarks array
     */

    $('.bookmark-badges').on('dblclick', '.bookmark-badge', function(event) {
        var index = fontsSaved.indexOf($(event.target).text());
        if (index !== -1) {
            fontsSaved.splice(index, 1);
            createBookmarkBadges();
        }
        if (fontsSaved.length > 0) {
            codeBlock.fadeIn('fast');
            $('.description').text('Click to view the font. Double click to remove it.');
        } else {
            codeBlock.fadeOut('fast');
            $('.description').text('No fonts bookmarked. Bookmark fonts by clicking on the font name');
        }
        updateSavedFontList();
        bookmarks.attr('data-bookmarks', fontsSaved.length);
        bookmarks.text(bookmarks.attr('data-bookmarks'));
    });

    /**
     * Hide the loader after 3.5 seconds
     */
    setTimeout(function() {
        $('.spinner-container').addClass('close').css('z-index', '-1');
    }, 3500);

    /**
     * make all links open in the new tab
     */

    $('a').attr('target', '_blank');

});