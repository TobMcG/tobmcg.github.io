/*$('#mainContent div').html(generateContentHTML([
    {
        heading: '',
        subheadings: [
            {
                subheading: '',
                paragraphs: [
                    '',
                    '',
                ],
            },
            {
                subheading: '',
                paragraphs: [
                    '',
                    '',
                ],
            },
        ],
    },
    {
        heading: '',
        subheadings: [
            {
                subheading: '',
                paragraphs: [
                    '',
                    '',
                ],
            },
        ],
    },
]));*/
function loadMainContent(image) {

    switch (image) {
    case 'intense':

        $('#mainContent div').html("");
        break;

    case 'fireworks':

        $('#mainContent div').html(generateContentHTML([
            {
                heading: 'Alex Pinto',
                subheadings: [{
                    subheading: '',
                    paragraphs: [
                        '<span style="font-weight: bold;">Alex</span> comes to us from the Deep South. He started social dancing in hip hop, then spent 3 years doing salsa, bachata, and various other Latin dances (socially and in performance groups). He has also begun to supplement his training via modern and ballet. His favorite dance remains the bachata.  He has been competing and performing with Badger Ballroom Dance Team (BBDT) for about 6 years now.',
                        'Alex has danced at the national level (USA Dance Nationals 2016) and looks to compete internationally as well. He possesses a Masters in Biostatistics and Bachelor in Molecular Bio and is now working as a statistician for a Public health research group at UW Madison. He looks forward to making dance more accessible in the lives of all he meets.',
                    ],
                }],
            },
            {
                heading: 'Alissa Milonczyk',
                subheadings: [{
                    subheading: '',
                    paragraphs: [
                        '<span style="font-weight: bold;">Alissa</span> grew up in the small town of Stratford, WI.  She was introduced to dance at the age of 4 at the Main Street Conservatory of Dance in the neighboring town of Marshfield, WI.  She practiced ballet & jazz for about 10 years. Missing dance, she joined the Badger Ballroom Dance Team as a Junior at UW-Madison in February 2013.  She has been dancing ever since!',
                        'Alissa is currently working towards her DVM at the UW-Madison School of Veterinary Medicine.  She also works at the school\'s veterinary clinic in Clinical Pathology. Her interests beyond dancing and animals include anything in the outdoors, such as sailing, windsurfing, hiking, swimming, and camping.',
                    ],
                }],
            },
        ]));

        break;

    case 'saxophone-jazzBand':

        $('#mainContent div').html(generateContentHTML([
            {
                subtitle: 'Stunning Entertainment',
                subheadings: [{
                    subheading: '',
                    paragraphs: [
                        'Alex and Alissa have performed for audiences at <span style="font-style: italic;">regional</span> and <span style="font-style: italic;">national</span> competitions, <span style="font-style: italic;">corporate events</span>, and <span style="font-style: italic;">cultural festivals.</span>',
                        'Please contact us if you are looking to spice up your next event!',
                    ],
                }],
            },
        ]));

        break;

    case 'well-dressed-feet':

        $('#mainContent div').html(generateContentHTML([
            {
                subtitle: 'Dance Styles',
                subheadings: [{
                    subheading: '',
                    paragraphs: [
                        'Alex and Alissa have taught lessons for casual social dancing as well as for formal ballroom competition, in large groups and with individual dancers or couples. They are proficient in the following styles:',
                        '</br>',
                        '<span style="font-weight: 900;">Salsa | Bachata | Merengue | Cha Cha | Rumba | Samba | Jive | Hustle | East Coast Swing | Argentine Tango</span>',
                        '</br>',
                        'Please contact us if you are interested in learning from us or if you are looking to spice up your next event!',
                    ],
                }],
            },
        ]));

        break;

    case 'wood-pattern-ground-parquet-floor':

        $('#mainContent div').html("");
        break;

    default:
        console.log('invalid option');
        break;
    }

}

function linkHover(element) {
    $(element).css("color", "#C23627")
    .css("text-decoration", "underline");
}
function linkUnhoverBlack(element) {
    $(element).css("color", "black")
    .css("text-decoration", "none");
}
function linkUnhoverBlue(element) {
    $(element).css("color", "blue")
}