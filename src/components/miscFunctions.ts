const addOption = (): void => {
  let container = document.querySelector('.option-container')

  let select = document.createElement('select')

  let selected = document.createElement('option')
  selected.setAttribute('value', 'all')
  selected.setAttribute('selected', '')
  selected.setAttribute('disabled', '')
  selected.setAttribute('hidden', '')
  selected.textContent = 'All'
  select.appendChild(selected)

  let options = [
    'All Departments',
    'Arts & Crafts',
    'Automotive',
    'Baby',
    'Beauty & Personal Care',
    'Books',
    "Boys' Fashion",
    'Computers',
    'Deals',
    'Digital Music',
    'Electronics',
    "Girls' Fashion",
    'Health & Household',
    'Home & Kitchen',
    'Industrial & Scientific',
    'Kindle Store',
    'Luggage',
    "Men's Fashion",
    'Movies & TV',
    'Music, CDs & Vinyl',
    'Pet Supplies',
    'Prime Video',
    'Software',
    'Sports & Outdoors',
    'Tools & Home Improvement',
    'Toys & Games',
    'Video Games',
    "Women's Fashion"
  ]
  for (let i = 0; i < options.length; i++) {
    const option = document.createElement('option')
    option.setAttribute('value', options[i])
    option.textContent = options[i]
    select.appendChild(option)
  }

  container?.appendChild(select)
}

const countrySelect = (): void => {
  let select = document.querySelector('#select-country')
  const countryList = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antarctica',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas (the)',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia (Plurinational State of)',
    'Bonaire, Sint Eustatius and Saba',
    'Bosnia and Herzegovina',
    'Botswana',
    'Bouvet Island',
    'Brazil',
    'British Indian Ocean Territory (the)',
    'Brunei Darussalam',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cayman Islands (the)',
    'Central African Republic (the)',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos (Keeling) Islands (the)',
    'Colombia',
    'Comoros (the)',
    'Congo (the Democratic Republic of the)',
    'Congo (the)',
    'Cook Islands (the)',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Curaçao',
    'Cyprus',
    'Czechia',
    "Côte d'Ivoire",
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic (the)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Falkland Islands (the) [Malvinas]',
    'Faroe Islands (the)',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia',
    'French Southern Territories (the)',
    'Gabon',
    'Gambia (the)',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Heard Island and McDonald Islands',
    'Holy See (the)',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran (Islamic Republic of)',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    "Korea (the Democratic People's Republic of)",
    'Korea (the Republic of)',
    'Kuwait',
    'Kyrgyzstan',
    "Lao People's Democratic Republic (the)",
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macao',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands (the)',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Micronesia (Federated States of)',
    'Moldova (the Republic of)',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands (the)',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger (the)',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'Northern Mariana Islands (the)',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine, State of',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines (the)',
    'Pitcairn',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Republic of North Macedonia',
    'Romania',
    'Russian Federation (the)',
    'Rwanda',
    'Réunion',
    'Saint Barthélemy',
    'Saint Helena, Ascension and Tristan da Cunha',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Martin (French part)',
    'Saint Pierre and Miquelon',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Sint Maarten (Dutch part)',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Georgia and the South Sandwich Islands',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan (the)',
    'Suriname',
    'Svalbard and Jan Mayen',
    'Sweden',
    'Switzerland',
    'Syrian Arab Republic',
    'Taiwan',
    'Tajikistan',
    'Tanzania, United Republic of',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos Islands (the)',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates (the)',
    'United Kingdom of Great Britain and Northern Ireland (the)',
    'United States Minor Outlying Islands (the)',
    'United States of America (the)',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Venezuela (Bolivarian Republic of)',
    'Viet Nam',
    'Virgin Islands (British)',
    'Virgin Islands (U.S.)',
    'Wallis and Futuna',
    'Western Sahara',
    'Yemen',
    'Zambia',
    'Zimbabwe',
    'Åland Islands'
  ]

  for (let i = 0; i <= countryList.length; i++) {
    let option = document.createElement('option')
    option.textContent = countryList[i]
    option.setAttribute('value', countryList[i])
    if (countryList[i] === 'Romania') option.setAttribute('selected', '')

    select?.appendChild(option)
  }
}

const showPanel = (e: any): void => {
  e.style = 'display:flex;'
  document
    .querySelector('.darker-background')
    ?.setAttribute('style', 'display:flex')
}
const hidePanel = (e: any): void => {
  e.style = 'display:none;'

  document
    .querySelector('.darker-background')
    ?.setAttribute('style', 'display:none')
}

const slideShow = (images: string[]): void => {
  let slideshowContainer = document.querySelector('.slideshow')

  for (let i = 0; i < images.length; i++) {
    let img = document.createElement('img')

    img.setAttribute('src', images[i])
    img.setAttribute('alt', '404')
    img.setAttribute('class', 'slideshow-image')

    img.style.display = 'none'
    slideshowContainer?.appendChild(img)
  }

  let elements = document.querySelectorAll<HTMLElement>('.slideshow-image')
  let imgIndex = 0
  slideShowNext(imgIndex, elements)
}

const slideShowNext = (
  imgIndex: number,
  elements: NodeListOf<HTMLElement>
): void => {
  if (imgIndex >= elements.length) {
    imgIndex = 0
    elements[elements.length - 1].style.display = 'none'
  }

  elements[imgIndex].style.display = 'block'
  if (elements[imgIndex - 1]) elements[imgIndex - 1].style.display = 'none'

  imgIndex++
  setTimeout(() => {
    slideShowNext(imgIndex, elements)
  }, 500)
}

export {
  addOption,
  countrySelect,
  showPanel,
  hidePanel,
  slideShow,
  slideShowNext
}
