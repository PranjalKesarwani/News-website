console.log('This is News website');

//Initialize the news api parameters
source = 'the-times-of-india';
let apiKey = 'e305fb1c5ee44ae281ebf0d36c4afa88'

//Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

//create an ajx get request



const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/everything?q=tesla&from=2022-02-25&sortBy=${source}&apiKey=${apiKey}`, true); //Ab kyuki yha se objects milenge ek array ke andar toh hm isse iterate krenge
//What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);  //articles yha ek array hai and uska nth element print krne ke liye articles[n] likhiye
        let newsHtml = '';
        articles.forEach(function (element, index) {
                // console.log(element);

                 news = `<div class="card">                        
                            <div class="card-header" id="heading${index}">
                                <button id = "popBtn" class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                    ${element['title']}
                                </button>
                            </div>
                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                                data-bs-parent="#newsAccordion">
                                <div class="card-body"> ${element['content']} <a href = "${element['url']}" target = "_blank">Read More</a>
                                </div>
                            </div>
                        </div>`
                newsHtml += news
          
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log('Some error occured!');
    }
}

xhr.send();

