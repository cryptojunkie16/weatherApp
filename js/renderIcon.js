export function getIcon(element) {
    let iconId = element.weather[0].icon;
    switch (iconId) {
        case '01d' :
        case '01n' :
            return `<svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="40px" height="40px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="white">
            <defs><style>.moon {fill:white;stroke-linecap:round;stroke-linejoin:round;stroke-width:1px;fill-rule:evenodd;}</style>
            </defs>
            <g>
            <path class="moon" d="M32,14c-9.925,0-18,8.075-18,18s8.075,18,18,18s18-8.075,18-18S41.925,14,32,14z M32,46c-7.72,0-14-6.28-14-14
                s6.28-14,14-14s14,6.28,14,14S39.72,46,32,46z"/>
            <path   class="moon" d="M30,2v8c0,1.104,0.896,2,2,2s2-0.896,2-2V2c0-1.104-0.896-2-2-2S30,0.896,30,2z"/>
            <path  class="moon" d="M32,52c-1.104,0-2,0.896-2,2v8c0,1.104,0.896,2,2,2s2-0.896,2-2v-8C34,52.896,33.104,52,32,52z"/>
            <path  class="moon" d="M62,30h-8c-1.104,0-2,0.896-2,2s0.896,2,2,2h8c1.104,0,2-0.896,2-2S63.104,30,62,30z"/>
            <path  class="moon" d="M12,32c0-1.104-0.896-2-2-2H2c-1.104,0-2,0.896-2,2s0.896,2,2,2h8C11.104,34,12,33.104,12,32z"/>
            <path  class="moon" d="M50.586,10.586l-4,4c-0.781,0.781-0.781,2.047,0,2.828C46.976,17.805,47.488,18,48,18s1.024-0.195,1.414-0.586l4-4
                c0.781-0.781,0.781-2.047,0-2.828C52.634,9.805,51.366,9.805,50.586,10.586z"/>
            <path  class="moon" d="M14.586,46.586l-4,4c-0.781,0.781-0.781,2.047,0,2.828C10.976,53.805,11.488,54,12,54s1.024-0.195,1.414-0.586l4-4
                c0.781-0.781,0.781-2.047,0-2.828C16.634,45.805,15.366,45.805,14.586,46.586z"/>
            <path  class="moon" d="M49.414,46.586c-0.78-0.781-2.048-0.781-2.828,0c-0.781,0.781-0.781,2.047,0,2.828l4,4C50.976,53.805,51.488,54,52,54
                s1.024-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828L49.414,46.586z"/>
            <path  class="moon" d="M10.586,10.586c-0.781,0.781-0.781,2.047,0,2.828l4,4C14.976,17.805,15.488,18,16,18s1.024-0.195,1.414-0.586
                c0.781-0.781,0.781-2.047,0-2.828l-4-4C12.634,9.805,11.366,9.805,10.586,10.586z"/>
            </g>
            </svg>`;
            break;
        case '02d' :
        case '02n' :
            return `<svg version="1.1" id="Layer_1" width="35px" height="35px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" fill="white">
            <g>
            <g>
            <g>
            <path d="M97.493,242.671c-12.638,8.823-22.016,21.777-26.402,36.489c-1.34,4.514,1.229,9.267,5.743,10.615
                c0.811,0.239,1.638,0.358,2.441,0.358c3.678,0,7.074-2.398,8.175-6.101c3.285-11.025,10.325-20.745,19.814-27.366
                c3.866-2.697,4.804-8.021,2.108-11.878C106.684,240.922,101.376,239.966,97.493,242.671z"/>
            <path d="M198.306,239.795c3.243,3.413,8.661,3.541,12.066,0.29c3.405-3.251,3.541-8.653,0.282-12.066
                c-19.524-20.48-45.85-31.753-74.121-31.753c-56.465,0-102.4,45.935-102.4,102.4c0,6.289,0.572,12.578,1.698,18.679
                c0.759,4.113,4.343,6.989,8.38,6.989c0.512,0,1.033-0.051,1.562-0.145c4.634-0.853,7.697-5.308,6.844-9.941
                c-0.947-5.086-1.417-10.334-1.417-15.582c0-47.053,38.281-85.333,85.333-85.333C160.094,213.333,182.033,222.737,198.306,239.795
                z"/>
            <path d="M246.605,128.862c2.185,0,4.369-0.836,6.033-2.5l24.141-24.132c3.337-3.336,3.337-8.738,0-12.075
                c-3.328-3.328-8.73-3.328-12.066,0l-24.141,24.141c-3.337,3.328-3.337,8.73,0,12.066
                C242.236,128.026,244.42,128.862,246.605,128.862z"/>
            <path d="M204.578,102.306c1.067,0.444,2.176,0.657,3.268,0.657c3.345,0,6.519-1.98,7.885-5.274l6.537-15.761
                c1.801-4.361-0.265-9.353-4.617-11.153c-4.369-1.809-9.353,0.265-11.153,4.617l-6.537,15.77
                C198.161,95.514,200.226,100.506,204.578,102.306z"/>
            <path d="M193.766,188.518c-2.628,3.917-1.587,9.216,2.321,11.844c3.917,2.637,9.216,1.587,11.844-2.321
                c22.272-33.178,59.383-52.975,99.268-52.975c65.869,0,119.467,53.589,119.467,119.467c0,10.829-1.451,21.547-4.292,31.863
                c-1.254,4.54,1.408,9.242,5.956,10.496c0.751,0.213,1.519,0.307,2.27,0.307c3.746,0,7.177-2.483,8.226-6.263
                c3.251-11.793,4.907-24.047,4.907-36.403C443.733,189.252,382.481,128,307.2,128C261.623,128,219.213,150.622,193.766,188.518z"
                />
            <path d="M381.235,206.191c-3.951,2.577-5.06,7.859-2.492,11.81c9.02,13.841,13.79,29.935,13.79,46.532
                c0,4.71,3.814,8.533,8.533,8.533c4.71,0,8.533-3.823,8.533-8.533c0-19.917-5.726-39.228-16.555-55.851
                C390.468,204.732,385.186,203.614,381.235,206.191z"/>
            <path d="M32.734,160.435l15.761,6.528c1.075,0.444,2.176,0.657,3.268,0.657c3.345,0,6.528-1.988,7.885-5.274
                c1.801-4.352-0.265-9.344-4.617-11.153l-15.77-6.528c-4.378-1.809-9.353,0.265-11.145,4.617
                C26.308,153.634,28.373,158.626,32.734,160.435z"/>
            <path d="M71.62,126.362c1.673,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.836,6.033-2.5c3.337-3.336,3.337-8.738,0-12.066
                L59.546,90.155c-3.328-3.328-8.73-3.328-12.066,0c-3.328,3.337-3.328,8.738,0,12.075L71.62,126.362z"/>
            <path d="M8.533,213.342l34.133-0.009c4.71,0,8.533-3.814,8.533-8.525c0-4.719-3.823-8.533-8.533-8.533H8.533
                c-4.719,0-8.533,3.823-8.533,8.533S3.814,213.342,8.533,213.342z"/>
            <path d="M468.625,283.247c-3.857-2.714-9.173-1.801-11.896,2.048c-2.722,3.849-1.809,9.173,2.039,11.896
                c22.647,16,36.164,42.069,36.164,69.743c0,47.053-38.281,85.333-85.333,85.333H68.267c-28.237,0-51.2-22.963-51.2-51.2
                c0-28.237,22.963-51.2,51.2-51.2c4.71,0,8.533-3.823,8.533-8.533s-3.823-8.533-8.533-8.533C30.626,332.8,0,363.426,0,401.067
                c0,37.641,30.626,68.267,68.267,68.267H409.6c56.456,0,102.4-45.935,102.4-102.4C512,333.722,495.778,302.438,468.625,283.247z"
                />
            <path d="M108.527,97.698c1.365,3.285,4.54,5.265,7.893,5.265c1.084,0,2.193-0.205,3.26-0.649
                c4.352-1.809,6.426-6.801,4.617-11.153l-6.537-15.77c-1.801-4.352-6.793-6.426-11.145-4.617
                c-4.352,1.801-6.426,6.793-4.617,11.153L108.527,97.698z"/>
            <path d="M76.817,195.959c0.58,0.128,1.152,0.179,1.724,0.179c3.968,0,7.526-2.782,8.346-6.818
                C94.165,153.788,125.807,128,162.133,128c16.785,0.009,32.742,5.333,46.123,15.403c3.78,2.825,9.114,2.065,11.955-1.698
                c2.833-3.763,2.074-9.114-1.69-11.947c-16.367-12.305-35.866-18.816-56.388-18.825c-44.399,0-83.072,31.531-91.964,74.957
                C69.222,190.507,72.201,195.021,76.817,195.959z"/>
            <path d="M162.133,93.875c4.71,0,8.533-3.823,8.533-8.533V51.2c0-4.71-3.823-8.533-8.533-8.533c-4.719,0-8.533,3.823-8.533,8.533
                v34.142C153.6,90.052,157.414,93.875,162.133,93.875z"/>
                </g>
            </g>
            </g>
            </svg>`;
            break;
        case '03d' :
        case '03n' :
            return `<svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px" viewBox="-351 153 256 256" xml:space="preserve" fill="white">
            <g>
            <path d="M-312.5,344.7c-18.3,0-33.1-14.9-33.1-33.1c0-18.2,14.9-33.1,33.2-33.1c0.1,0,0.3,0,0.4,0c2.6-22.2,21.6-39.6,44.5-39.6
            c2.6,0,5.2,0.2,8,0.8c6.6-27.9,31.8-48.3,60.9-48.3c34.6,0,62.7,28.1,62.7,62.7c0,0.1,0,0.3,0,0.4c22.6,2.2,40.4,21.4,40.4,44.5
            c0,24.7-20,44.7-44.7,44.7C-141.8,343.8-310.8,344.7-312.5,344.7z M-308.3,287.8c-12.1,0-21.9,9.8-21.9,21.8s9.8,21.8,21.8,21.8
            c6.7,0,163.3-0.8,164.5-0.8c18.1,0,32.8-14.8,32.8-32.8s-14.7-32.8-32.7-32.8c-0.5,0.1-0.8,0.1-1.2,0.1h-5.5l0.6-5.5
            c0.2-1.6,0.2-3.2,0.2-4.8c0-27.5-22.4-49.9-49.9-49.9c-24.7,0-46,18.5-49.4,43l-0.8,5.8l-5.6-1.8c-3.7-1.2-6.9-1.7-10.1-1.7
            c-17.8-0.1-32.5,14.3-32.7,32.3c0.1,0.3,0.1,0.6,0.1,1v5.8l-5.8-1.1C-305.6,287.9-306.9,287.8-308.3,287.8z"/>
            </g>
            </svg>`;
            break;
        case '04d' :
        case '04n' :
            return  `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 458.941 458.941" style="enable-background:new 0 0 458.941 458.941;" xml:space="preserve" fill="white">
            <g>
                <g>
                    <g>
                        <path d="M244.244,130.349C244.053,129.899,244.434,130.809,244.244,130.349L244.244,130.349z"/>
                        <path d="M245.864,132.789c4.66,4.524,12.825,1.301,12.81-5.3c-0.014-6.588-8.126-9.857-12.81-5.31
                            c-2.081,2.144-2.797,5.389-1.62,8.17C244.621,131.262,245.177,132.081,245.864,132.789z"/>
                        <path d="M440.698,211.035c-10.322-12.704-24.312-22.051-39.858-26.737c-2.274-48.6-42.526-87.441-91.679-87.441
                            c-15.588,0-30.987,3.981-44.532,11.512c-3.62,2.013-4.923,6.58-2.911,10.2c2.014,3.621,6.579,4.924,10.2,2.911
                            c11.322-6.295,24.2-9.622,37.243-9.622c42.336,0,76.78,34.443,76.78,76.78c0,0.438-0.009,0.875-0.019,1.313
                            c-0.075,3.575,2.385,6.706,5.877,7.479c14.56,3.224,27.792,11.416,37.257,23.064c9.598,11.813,14.884,26.719,14.884,41.973
                            c0,36.734-29.886,66.62-66.62,66.62h-1.951c7.109-11.096,11.251-24.267,11.251-38.395c0-27.877-16.479-53.287-41.52-64.851
                            c-0.513-36.41-30.292-65.869-66.821-65.869c-8.242,0-16.417,1.536-24.063,4.488c-5.886-17.846-16.906-33.862-31.645-45.778
                            C205.165,104.61,183.23,96.86,160.806,96.86c-52.788,0-95.993,41.82-98.224,94.069c-16.798,4.977-31.923,15.035-43.06,28.741
                            C6.934,235.167,0,254.717,0,274.719c0,48.173,39.192,87.365,87.365,87.365H315.23c18.139,0,34.71-6.812,47.317-17.997h14.774
                            c45.005,0,81.62-36.615,81.62-81.62C458.941,243.779,452.462,225.513,440.698,211.035z M315.231,347.083H87.365v0.001
                            C47.463,347.084,15,314.621,15,274.719c0-16.568,5.741-32.758,16.166-45.589c10.281-12.654,24.653-21.553,40.47-25.057
                            c3.479-0.771,5.936-3.884,5.876-7.448l-0.005-0.288c-0.007-0.387-0.014-0.773-0.014-1.162c0-45.94,37.375-83.314,83.314-83.314
                            c19.278,0,37.375,6.393,52.334,18.486c14.537,11.752,24.806,28.201,28.915,46.315c0.523,2.307,2.104,4.231,4.265,5.193
                            c2.16,0.961,4.648,0.848,6.713-0.308c7.685-4.302,16.415-6.576,25.247-6.576c28.578,0,51.828,23.25,51.828,51.828
                            c0,1.025-0.042,2.132-0.131,3.484c-0.22,3.311,1.762,6.373,4.874,7.528c21.994,8.165,36.771,29.416,36.771,52.88
                            C371.623,321.785,346.326,347.083,315.231,347.083z"/>
                    </g>
                </g>
            </g>
            </svg>`;
            break;
        case '09d' :
        case '09n' :
            return `<svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>ic_fluent_weather_rain_showers_day_48_regular</title>
            <desc>Created with Sketch.</desc>
            <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="white" fill-rule="evenodd">
                <g id="ic_fluent_weather_rain_showers_day_48_regular" fill="white" fill-rule="nonzero">
                    <path d="M26.0011082,12 C32.3381703,12 35.9330779,16.1945808 36.4559068,21.2602528 L36.6158392,21.2602476 C40.6939986,21.2602476 44,24.5576953 44,28.6253032 C44,32.6929111 40.6939986,35.9903588 36.6158392,35.9903588 L34.8933035,35.990202 L34.8539502,36.0847985 L34.8539502,36.0847985 L34.7876669,36.2133378 L31.2876669,42.2755156 C30.8734533,42.9929546 29.9560677,43.2387673 29.2386288,42.8245537 C28.5633921,42.4347057 28.3059282,41.5991412 28.6233073,40.904055 L28.6895907,40.7755156 L31.4522238,35.9896759 L27.156891,35.990202 L27.1175378,36.0847985 L27.1175378,36.0847985 L27.0512544,36.2133378 L23.5512544,42.2755156 C23.1370409,42.9929546 22.2196553,43.2387673 21.5022163,42.8245537 C20.8269797,42.4347057 20.5695157,41.5991412 20.8868948,40.904055 L20.9531782,40.7755156 L23.7152238,35.9896759 L19.4204786,35.990202 L19.3811254,36.0847985 L19.3811254,36.0847985 L19.314842,36.2133378 L15.814842,42.2755156 C15.4006284,42.9929546 14.4832428,43.2387673 13.7658039,42.8245537 C13.0905672,42.4347057 12.8331033,41.5991412 13.1504824,40.904055 L13.2167658,40.7755156 L15.9792238,35.9896759 L15.3863771,35.9903588 C11.3082177,35.9903588 8.00221632,32.6929111 8.00221632,28.6253032 C8.00221632,24.5576953 11.3082177,21.2602476 15.3864221,21.2602476 L15.5463095,21.2602528 C16.0721799,16.1612855 19.664046,12 26.0011082,12 Z M26.0011082,14.4951794 C21.740053,14.4951794 18.0260728,17.943132 18.0260728,22.7057506 C18.0260728,23.4603788 17.3699402,24.0525284 16.6186379,24.0525039 L15.1980538,24.0524575 C12.6039833,24.0524575 10.5010736,26.1662828 10.5010736,28.7738184 C10.5010736,31.3813541 12.6039833,33.4951794 15.1980538,33.4951794 L36.8041625,33.4951794 C39.3982331,33.4951794 41.5011427,31.3813541 41.5011427,28.7738184 C41.5011427,26.1662828 39.3982331,24.0524575 36.8042083,24.0524575 L35.3835784,24.0525039 C34.6322761,24.0525284 33.9761435,23.4603788 33.9761435,22.7057506 C33.9761435,17.8820375 30.2621633,14.4951794 26.0011082,14.4951794 Z M8.70844842,20.3034026 C8.95484425,20.8982547 8.70541931,21.5747763 8.15045945,21.8735767 L8.03545006,21.9281644 L5.72396973,22.8899154 C5.08946079,23.1527376 4.36203016,22.851426 4.09920795,22.2169171 C3.85281213,21.6220649 4.10223707,20.9455434 4.65719693,20.646743 L4.77220632,20.5921553 L7.08368665,19.6304042 C7.71819559,19.367582 8.44562622,19.6688937 8.70844842,20.3034026 Z M21.7083287,10.6620508 L21.6473424,10.6816385 C20.72265,10.9835732 19.8632401,11.3836454 19.0764082,11.8717906 C17.7682126,11.3183083 16.2469454,11.269339 14.830392,11.8560947 C12.0240469,13.0185209 10.6913873,16.2358458 11.8538135,19.042191 C11.9673174,19.3162137 12.1004134,19.5761858 12.2508059,19.8211563 C11.4920644,20.0922821 10.7785601,20.4595355 10.1246453,20.90811 C9.94796683,20.6053032 9.7899557,20.2869652 9.65210654,19.9541678 C7.98600939,15.9318535 9.89610082,11.3204849 13.9184152,9.65438772 C16.6028947,8.5424399 19.5497498,9.02339234 21.7083287,10.6620508 Z M5.58024133,10.8419264 L5.70722681,10.8876985 L8.02603917,11.8765422 C8.65583478,12.1426605 8.95791669,12.8719507 8.70075799,13.5054575 C8.4607432,14.0967305 7.81839718,14.3955893 7.22177062,14.2164453 L7.09478514,14.1706733 L4.77597278,13.1818295 C4.14617716,12.9157112 3.84409526,12.186421 4.10125396,11.5529142 C4.34126875,10.9616412 4.98361477,10.6627824 5.58024133,10.8419264 Z M12.9486043,4.6682814 L13.0034756,4.78388835 L13.9639264,7.08980967 C14.2281142,7.72761539 13.925237,8.4588256 13.2874313,8.72301338 C12.6894884,8.97068942 12.0094518,8.71996852 11.7090989,8.16212521 L11.6542276,8.04651825 L10.6937768,5.74059693 C10.429589,5.10279121 10.7324662,4.37158101 11.3702719,4.10739323 C11.9682148,3.85971718 12.6482515,4.11043808 12.9486043,4.6682814 Z M21.9969417,4.10818654 C22.5986668,4.35742926 22.9054758,5.0179015 22.7265912,5.62902619 L22.6807552,5.75905831 L21.6894127,8.03474892 C21.422367,8.67945445 20.6832465,8.98560817 20.038541,8.71856239 C19.4368158,8.46931967 19.1300069,7.80884744 19.3088915,7.19772275 L19.3547275,7.06769063 L20.3460699,4.79200002 C20.6131157,4.14729449 21.3522361,3.84114077 21.9969417,4.10818654 Z" id="🎨-Color"></path>
                </g>
            </g>
            </svg>`;
            break;
        case '10d' :
        case '10n' :
            return `<svg  xmlns="http://www.w3.org/2000/svg" version="1.1" fill="white" viewBox="0 0 32 32">
            <title>rainy</title>
            <path d="M25 4c-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070s-6.145 1.526-8.013 4.070c-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7s-3.141-7-7-7zM25 16c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.138 1.902 0.38 1.327-2.588 3.991-4.38 7.098-4.38s5.771 1.792 7.096 4.38c0.587-0.242 1.229-0.38 1.904-0.38 2.762 0 5 2.238 5 5s-2.238 5-5 5zM14.063 30c0 1.105 0.895 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4zM22 28c0 1.105 0.895 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4zM6 24c0 1.105 0.894 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4z"></path>
            </svg>`;
            break;
        case '11d' :
        case '11n' :
            return `<svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="white">
            <title>ic_fluent_weather_thunderstorm_48_regular</title>
            <desc>Created with Sketch.</desc>
            <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="white" fill-rule="evenodd">
                <g id="ic_fluent_weather_thunderstorm_48_regular" fill="white" fill-rule="nonzero">
                    <path d="M21.2820141,31.9498796 L25.7989061,26.4610326 C26.2375773,25.9279671 27.0253256,25.8514454 27.5583911,26.2901167 C28.055919,26.6995432 28.1557464,27.4130546 27.8101895,27.9397718 L27.7293071,28.0496018 L24.8947015,31.4941642 L29.7527854,31.4941642 C30.7624395,31.4941642 31.3388164,32.6182265 30.7975632,33.4311483 L30.724036,33.5310392 L24.2386064,41.5360942 C23.8040274,42.0725011 23.0168878,42.1550489 22.4804808,41.7204699 C21.9798344,41.3148628 21.8745497,40.6021362 22.2160657,40.07279 L22.2961052,39.9623443 L27.1313264,33.9941642 L22.2472146,33.9941642 C21.2332753,33.9941642 20.658057,32.8617583 21.207435,32.0496233 L21.2820141,31.9498796 L25.7989061,26.4610326 L21.2820141,31.9498796 Z M26.0011082,10.0178101 C32.3381703,10.0178101 35.9330779,14.2123909 36.4559068,19.2780629 L36.6158392,19.2780577 C40.6939986,19.2780577 44,22.5755054 44,26.6431133 C44,30.7107212 40.6939986,34.0081689 36.6158392,34.0081689 L32.4933245,34.0090881 C32.8113163,33.5897118 33,33.0668906 33,32.5 C33,32.1493185 32.927796,31.8155011 32.7974434,31.5126035 L36.8041625,31.5129895 C39.3982331,31.5129895 41.5011427,29.3991642 41.5011427,26.7916285 C41.5011427,24.1840929 39.3982331,22.0702676 36.8042083,22.0702676 L35.3835784,22.070314 C34.6322761,22.0703385 33.9761435,21.4781889 33.9761435,20.7235607 C33.9761435,15.8998476 30.2621633,12.5129895 26.0011082,12.5129895 C21.740053,12.5129895 18.0260728,15.9609421 18.0260728,20.7235607 C18.0260728,21.4781889 17.3699402,22.0703385 16.6186379,22.070314 L15.1980538,22.0702676 C12.6039833,22.0702676 10.5010736,24.1840929 10.5010736,26.7916285 C10.5010736,29.3991642 12.6039833,31.5129895 15.1980538,31.5129895 L19.2025566,31.5126035 C19.072204,31.8155011 19,32.1493185 19,32.5 C19,33.0668906 19.1886837,33.5897118 19.5066755,34.0090881 L15.3863771,34.0081689 C11.3082177,34.0081689 8.00221632,30.7107212 8.00221632,26.6431133 C8.00221632,22.6568576 11.1773,19.4102636 15.1426767,19.2819944 L15.5463095,19.2780629 C16.0721799,14.1790956 19.664046,10.0178101 26.0011082,10.0178101 Z M19.9977296,4 C23.2227859,4 26.0811908,5.62184351 27.7846265,8.10439007 C27.2066212,8.03525334 26.6106555,8 25.9977296,8 C25.4328541,8 24.8824848,8.02971641 24.3476133,8.08778424 C23.1658135,7.06931736 21.6426814,6.46153846 19.9977296,6.46153846 C16.7134884,6.46153846 13.91485,8.88429254 13.3542441,12.1575301 L13.0407741,13.9878031 C12.9585358,14.4679717 12.5422527,14.8190077 12.0550925,14.8189915 L10.1082252,14.8189268 C8.04515265,14.8189268 6.37272957,16.5297801 6.37272957,18.6402326 C6.37272957,19.7460711 6.83190527,20.7421984 7.56585178,21.4399716 C7.13513295,22.0840212 6.78269502,22.786208 6.52174243,23.5317987 C4.98551398,22.3317632 3.99772957,20.4607235 3.99772957,18.3589744 C3.99772957,14.7337206 6.93657839,11.7948718 10.5618721,11.7948718 L10.7040031,11.7948764 C11.4823829,7.35221765 15.361137,4 19.9977296,4 Z" id="🎨-Color"></path>
                </g>
            </g>
            </svg>`;
            break;
        case '13d' :
        case '13n' :
            return `<svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
            <style type="text/css">
            .st0{fill:none;stroke:white;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .st1{fill:none;stroke:white;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;}
            </style>
            <line class="st0" x1="10.5" y1="5.14" x2="10.5" y2="10.5"/>
            <polyline class="st0" points="12.65,3 10.5,5.14 8.36,3 "/>
            <line class="st0" x1="5.87" y1="7.82" x2="10.5" y2="10.5"/>
            <polyline class="st0" points="5.08,4.89 5.87,7.82 2.94,8.61 "/>
            <line class="st0" x1="5.87" y1="13.18" x2="10.5" y2="10.5"/>
            <polyline class="st0" points="2.94,12.39 5.87,13.18 5.08,16.11 "/>
            <line class="st0" x1="10.5" y1="15.86" x2="10.5" y2="10.5"/>
            <polyline class="st0" points="8.36,18 10.5,15.86 12.65,18 "/>
            <line class="st0" x1="15.14" y1="13.18" x2="10.5" y2="10.5"/>
            <polyline class="st0" points="15.93,16.11 15.14,13.18 18.07,12.39 "/>
            <line class="st0" x1="15.14" y1="7.82" x2="10.5" y2="10.5"/>
            <polyline class="st0" points="18.07,8.61 15.14,7.82 15.93,4.89 "/>
            <line class="st0" x1="23" y1="18.79" x2="23" y2="23.04"/>
            <polyline class="st0" points="24.7,17.09 23,18.79 21.3,17.09 "/>
            <line class="st0" x1="19.32" y1="20.91" x2="23" y2="23.04"/>
            <polyline class="st0" points="18.7,18.59 19.32,20.91 17,21.53 "/>
            <line class="st0" x1="19.32" y1="25.16" x2="23" y2="23.04"/>
            <polyline class="st0" points="17,24.54 19.32,25.16 18.7,27.48 "/>
            <line class="st0" x1="23" y1="27.28" x2="23" y2="23.04"/>
            <polyline class="st0" points="21.3,28.98 23,27.28 24.7,28.98 "/>
            <line class="st0" x1="26.68" y1="25.16" x2="23" y2="23.04"/>
            <polyline class="st0" points="27.3,27.48 26.68,25.16 29,24.54 "/>
            <line class="st0" x1="26.68" y1="20.91" x2="23" y2="23.04"/>
            <polyline class="st0" points="29,21.53 26.68,20.91 27.3,18.59 "/>
            </svg>`;
            break;
        case '50d' :
        case '50n' :
            return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512" fill="white">
                <g>
                <g>
                <path d="m480.6,299.4h-54.5c15.2-27.7 23.8-59.6 23.8-93.4 0-28.7-6.2-55.9-17.3-80.4 2.8-0.4 4.4-0.6 4.5-0.6 11.2-0.8 19.7-10.6 18.9-21.9-0.8-11.3-10.8-19.8-21.9-18.9-1.1,0.1-10.4,0.9-23.5,4.3-35.6-47-92-77.5-155.4-77.5-106.5,0-193.4,86.2-194.6,192.7h-29.2c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h32.9c18,89.2 96.7,156.5 190.9,156.5 55.5,0 105.6-23.4 141.1-60.8h84.2c11.3,0 20.4-9.1 20.4-20.4 0.1-11.3-9-20.4-20.3-20.4zm-103,0h-165.4c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h118.7c-22.4,12.7-48.2,20-75.7,20-71.6,0-131.9-49.2-149-115.7h171.4c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4h-176.2c1.2-83.9 69.8-151.9 153.8-151.9 46.3,0 88,20.6 116.2,53.2-10.7,6.4-21.2,14.8-30.4,25.8-34.9-41.7-90.2-46.3-93-46.5-11.1-0.9-21,7.6-21.9,18.9-0.8,11.2 7.6,21 18.9,21.9 0.6,0 57,5.3 76.8,52.4 4,9.5 14.7,13 19.3,13 8,0 15.9-4.4 19.3-13 7.4-18.3 20.4-30.2 33.6-38.1 9.7,20.2 15.1,42.8 15.1,66.6-1.13687e-13,35.1-11.8,67.4-31.5,93.4z"/>
                <path d="m303.7,460.2h-206c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h206c11.3,0 20.4-9.1 20.4-20.4 5.68434e-14-11.3-9.1-20.4-20.4-20.4z"/>
                </g>
                </g>
            </svg>`;
            break; 
    }
}
