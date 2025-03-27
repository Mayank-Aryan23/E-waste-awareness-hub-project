// Define the quiz data for each topic
const quizData = {
    topic1: {
      title: "E-Waste Basics",
      questions: [
        { question: "What does e-waste refer to?", options: ["Recycled materials", "Old electronic devices", "New gadgets", "Organic waste"], answer: "Old electronic devices" },
        { question: "Which of these is an example of e-waste?", options: ["Plastic bottles", "Smartphones", "Paper", "Cardboard"], answer: "Smartphones" },
        { question: "How quickly does e-waste grow worldwide?", options: ["Faster than any other waste stream", "Slowly", "At a constant rate", "Is decreasing"], answer: "Faster than any other waste stream" },
        { question: "Which of these devices is considered e-waste?", options: ["Refrigerators", "Laptops", "Water bottles", "Shoes"], answer: "Laptops" },
        { question: "What is a common term used for electronic waste?", options: ["Green waste", "E-waste", "Plastic waste", "Metal waste"], answer: "E-waste" },
      ]
    },
    topic2: {
      title: "Environmental Impact",
      questions: [
        { question: "What is the most harmful chemical found in e-waste that can contaminate soil and water?", options: ["Iron", "Mercury", "Aluminum", "Silicon"], answer: "Mercury" },
        { question: "How does e-waste contribute to air pollution?", options: ["By releasing oxygen into the atmosphere", "By emitting toxic gases when burned", "By filtering harmful particles", "By increasing plant growth"], answer: "By emitting toxic gases when burned" },
        { question: "Which of the following is a major environmental impact of illegal e-waste dumping?", options: ["Improved air quality", "Reduced global warming", "Soil and water contamination", "Increase in wildlife population"], answer: "Soil and water contamination" },
        { question: "How can individuals help reduce the environmental impact of e-waste?", options: ["Buying electronics unnecessarily", "Repairing and reusing devices before replacing them", "Ignoring e-waste recycling programs", "Throwing old electronics in landfills"], answer: "Repairing and reusing devices before replacing them" },
        { question: "Which of the following toxic substances is commonly found in old CRT monitors and TVs?", options: ["Lead", "Sodium", "Iron", "Zinc"], answer: "Lead" },
      ]
    },
  topic3: {
    title: "Recycling E-waste",
    questions: [
      { question: "What is the first step in the e-waste recycling process?", options: [" Burning the waste", "Collection and transportation", "Crushing e-waste into powder", "Throwing it in landfills"], answer: "Collection and transportation" },
      { question: "Which material is commonly extracted from recycled e-waste?", options: ["Gold", "Plastic", "Copper", "All of the above"], answer: "All of the above" },
      { question: "Which of the following is NOT an effective method of e-waste disposal?", options: ["Landfilling", "Recycling", "Donating for reuse", "Proper Dismantling"], answer: "Landfilling" },
      { question: "What can you do to reduce e-waste?", options: ["Repair old devices instead of replacing them", "Recycle gadgets responsibly", "Donate or resell working electronics", "All of the above"], answer: "All of the above" },
      { question: "Which organization sets global standards for e-waste recycling?", options: ["World Health Organization (WHO)", "Basel Convention", "United Nations Educational, Scientific and Cultural Organization (UNESCO)", "World Trade Organization (WTO)"], answer: "Basel Convention" },
    ]
  },
  topic4: {
    title: "Health Effects of E-Waste",
    questions: [
      { question: "Which toxic metal found in e-waste can damage the nervous system?", options: ["Lead", "Magnesium", "Iron", "Zinc"], answer: "Lead" },
      { question: "What health issue is commonly linked to mercury exposure from e-waste?", options: ["Bone fractures", "Liver failure", "Kidney damage", "Skin rash"], answer: "Kidney damage" },
      { question: "What is one common way e-waste toxins enter the human body?", options: ["Direct skin contact", "Consuming contaminated food or water", "Breathing in polluted air", "All of the above"], answer: "All of the above" },
      { question: "What is a major health risk of inhaling fumes from burning e-waste?", options: ["Increased appetite", "Lung infections and respiratory diseases", "Enhanced immune system", "Improved eyesight"], answer: "Lung infections and respiratory diseases" },
      { question: "Which of the following is a potential effect of e-waste contamination on wildlife?", options: ["Genetic mutations", "Increased reproduction", "Improved immune system", "Faster growth rates"], answer: "Genetic mutations" },
    ]
  },
  topic5: {
    title: "Global E-Waste Statistics",
    questions: [
      { question: "Which region produces the most e-waste annually?", options: ["Africa", "Europe", "Asia", "South America"], answer: "Asia" },
      { question: "What percentage of global e-waste is properly recycled?", options: ["10%", "25%", "35%", "Less than 20%"], answer: "Less than 20%" },
      { question: "Which country generates the most e-waste per capita?", options: ["China", "United States", "Norway", "India"], answer: "Norway" },
      { question: "Which country produces the highest total amount of e-waste?", options: ["China", "United States", "Brazil", "India"], answer: "China" },
      { question: "What is the main reason why e-waste recycling rates are low?", options: ["Lack of consumer awareness", "High cost of recycling", "Weak regulations in many countries", "All of the above"], answer: "All of the above" },
    ]
  },
  topic6: {
    title: "UN Sustainable Consumption and Production (SCP) Programme",
    questions: [
      { question: "Why is sustainable consumption and production important for future generations?", options: ["It helps create more job opportunities", "It ensures that natural resources are available for future generations", " It increases global economic growth indefinitely", "It promotes the use of fossil fuels"], answer: "It ensures that natural resources are available for future generations" },
      { question: "By 2050, the global population is expected to reach approximately:", options: ["8.5 billion", "9.8 billion", "11.2 billion", "13 billion"], answer: "9.8 billion" },
      { question: "What major trend in sustainability reporting was observed in recent years?", options: ["It has declined by 50%", "It has remained the same", "It has tripled in a few years", "It has been banned in most countries"], answer: "It has tripled in a few years" },
      { question: "What happened to fossil fuel subsidies from 2020 to 2021?", options: ["They were eliminated", "They doubled", "They decreased by half", "They remained the same"], answer: "They doubled" },
      { question: "Which of the following is a key solution for sustainable consumption?", options: [" Increasing the use of single-use plastics", "Transitioning to a circular economy", "Expanding fossil fuel usage", "Reducing government regulations on production"], answer: "Transitioning to a circular economy" },
      { question: "What is a key principle of the circular economy?", options: ["Producing more products faster", "Designing products for longevity, repairability, and recyclability", "Disposing of used products in landfills", "Encouraging single-use materials"], answer: "Designing products for longevity, repairability, and recyclability" },
      { question: "Which action can individuals take to support sustainability?", options: ["Buying more plastic products", "Consuming less and choosing sustainable products", "Throwing away unused food", "Avoiding local businesses"], answer: "Consuming less and choosing sustainable products" },
      { question: "What is one of the main pollutants in the ocean?", options: ["Wood", "Plastic", "Glass", "Metal"], answer: "Plastic" },
      { question: "How can individuals help reduce plastic waste?", options: ["Carrying reusable bags", "Using plastic straws", "Throwing plastic bottles in landfills", "Buying more plastic-packaged products"], answer: "Carrying reusable bags" },
      { question: "What must be prioritized to achieve Goal 12?", options: ["Continued economic growth with no environmental considerations", "Decoupling economic growth from resource use", "Encouraging overconsumption", "Eliminating sustainability reporting"], answer: "Decoupling economic growth from resource use" },
    ]
  },
  topic7: {
    title: "WHO on E-waste",
    questions: [
      { question: "How much e-waste was produced globally in 2022?", options: ["50 million tonnes", "62 million tonnes", "75 million tonnes", "100 million tonnes"], answer: "62 million tonnes" },
      { question: "What percentage of e-waste was properly recycled in 2022?", options: ["10.5%", "15.8%", "22.3%", "30.7%"], answer: "22.3%" },
      { question: "Which hazardous substance is commonly found in e-waste?", options: ["Mercury", "Arsenic", "Chlorine", "Nitrogen"], answer: "Mercury" },
      { question: "Which group is most vulnerable to the health effects of e-waste exposure?", options: ["Athletes", "Elderly people", "Children and adolescents", "Scientists"], answer: "Children and adolescents" },
      { question: "Which health problem is associated with exposure to e-waste?", options: ["Lower immune system", "Impaired lung function", "Slower metabolism", "Weaker bones"], answer: "Impaired lung function" },
      { question: "How many children were estimated to be working in industrial sectors, including waste processing, in 2020?", options: ["5.3 million", "10.7 million", "16.5 million", "22.1 million"], answer: "16.5 million" },
      { question: "Which international organization estimates the number of children working in waste processing?", options: ["WHO", "UNICEF", "ILO", "UNEP"], answer: "ILO" },
      { question: "What type of pollution is caused by burning e-waste improperly?", options: [" Noise pollution", "Light pollution", "Air pollution", "Radiation pollution"], answer: "Air pollution" },
      { question: "Which of the following is a key step in reducing e-waste?", options: [" Buying more electronics", "Throwing old devices in the trash", "Repairing and recycling old electronics", "Exporting e-waste to other countries"], answer: "Repairing and recycling old electronics" },
      { question: "How can consumers contribute to reducing e-waste??", options: ["Upgrading devices frequently", "Buying second-hand or refurbished electronic", "Throwing old devices in landfills", " Avoiding electronic devices altogether"], answer: "Buying second-hand or refurbished electronic" },
    ]
  },
  topic8: {
    title: "Status of E-Waste in India",
    questions: [
      { question: "Approximately how much e-waste is generated annually in India, according to the document?", options: ["500,000 tonnes", "800,000 tonnes", "1.2 million tonnes", "2 million tonnes"], answer: "800,000 tonnes" },
      { question: "Which state in India is the largest producer of e-waste?", options: [" Tamil Nadu", "Uttar Pradesh", "Maharashtra​", "Delhi"], answer: "Maharashtra​" },
      { question: "Which sector is a major contributor to e-waste generation in India?", options: ["Agriculture", "Information Technology", "Textile", "Automobile"], answer: "Information Technology" },
      { question: "What hazardous substances are commonly found in e-waste?", options: ["Mercury and lead", "Sodium and potassium", "Iron and copper", "Zinc and magnesium​"], answer: "Mercury and lead" },
      { question: "Which city in India generates the highest amount of e-waste?", options: ["Bangalore", "Mumbai​", "Chennai", "Kolkata"], answer: "Mumbai​" },
      { question: "What is the estimated annual growth rate of e-waste generation in India?", options: ["5%​", "10%", "15%", "20%"], answer: "10%" },
      { question: "Which organization provides guidelines for e-waste management in India?", options: ["Ministry of Health", "Ministry of Environment and Forests", "Ministry of Commerce", "Ministry of Urban Development"], answer: "Ministry of Environment and Forests" },
      { question: "What is the main challenge in managing e-waste in India?", options: [" Lack of e-waste", "Insufficient recycling infrastructure", "Excessive government regulation", "Low production of electronics"], answer: "Insufficient recycling infrastructure" },
      { question: "Which of the following health problems is linked to improper e-waste recycling?", options: ["Respiratory diseases", "Skin disorders", "Neurological damage", "All of the above"], answer: "All of the above" },
      { question: "Which Indian law specifically regulates e-waste management?", options: ["The E-Waste (Management) Rules, 2016", "The Environment Protection Act, 1986", "The Hazardous Waste Rules, 2008", "The Clean Air Act, 2000"], answer: "The E-Waste (Management) Rules, 2016" },
    ]
  },
  };
  
  // Function to start the quiz for a given topic
  function startQuiz(topic) {
    document.getElementById("quiz-section").style.display = "block";
    document.getElementById("quiz-title").innerText = `Quiz on ${quizData[topic].title}`;
    const questionsContainer = document.getElementById("questions-container");
    questionsContainer.innerHTML = ""; // Clear previous questions
  
    quizData[topic].questions.forEach((questionObj, index) => {
      const questionElement = document.createElement("div");
      questionElement.classList.add("question");
  
      const questionText = document.createElement("p");
      questionText.innerText = `${index + 1}. ${questionObj.question}`;
  
      const optionsList = document.createElement("div");
      questionObj.options.forEach(option => {
        const optionLabel = document.createElement("label");
        const optionInput = document.createElement("input");
        optionInput.type = "radio";
        optionInput.name = `question-${index}`;
        optionInput.value = option.trim(); // Ensure no extra spaces
        optionLabel.appendChild(optionInput);
        optionLabel.appendChild(document.createTextNode(option));
        optionsList.appendChild(optionLabel);
      });
  
      questionElement.appendChild(questionText);
      questionElement.appendChild(optionsList);
      questionsContainer.appendChild(questionElement);
    });
  
    document.getElementById("quiz-form").dataset.topic = topic; // Store selected topic
  }
  
  // Function to handle quiz submission
  document.getElementById("quiz-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const selectedTopic = this.dataset.topic;
    const formElements = this.elements;
    let score = 0;
    let totalQuestions = quizData[selectedTopic].questions.length;
    const username = document.getElementById("username").value.trim(); // Get user name

    if (!username) {
        alert("Please enter your name to receive the certificate.");
        return;
    }

    quizData[selectedTopic].questions.forEach((question, i) => {
        const selectedAnswer = formElements[`question-${i}`]?.value;
        if (selectedAnswer === question.answer) {
            score++;
        }
    });

    const result = document.getElementById("quiz-result");
    result.innerHTML = `<div class="score-display">Your score: <strong>${score}</strong> / ${totalQuestions}</div>`;

    // If the user scores 100%, generate the certificate
    if (score === totalQuestions) {
        setTimeout(() => {
            document.getElementById("certificate-container").style.display = "block";
            document.getElementById("certificate-name").innerText = username;
            document.getElementById("certificate-topic").innerText = quizData[selectedTopic].title;

            // Add download functionality
            document.getElementById("download-btn").addEventListener("click", function () {
                html2canvas(document.getElementById("certificate")).then(canvas => {
                    const link = document.createElement("a");
                    link.href = canvas.toDataURL("image/png");
                    link.download = `Certificate_${username}.png`;
                    link.click();
                });
            });
        }, 100);
    }
});


  function generateCertificate() {
    const canvas = document.getElementById("certificateCanvas");
    const ctx = canvas.getContext("2d");
  
    // Background
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    // Certificate Border
    ctx.strokeStyle = "#2c6e49";
    ctx.lineWidth = 10;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
  
    // Certificate Title
    ctx.fillStyle = "#2c6e49";
    ctx.font = "bold 36px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Certificate of Achievement", canvas.width / 2, 100);
  
    // Subheading
    ctx.fillStyle = "#444";
    ctx.font = "20px Arial";
    ctx.fillText("This is to certify that", canvas.width / 2, 170);
  
    // User's Name (You can replace this with an input field to capture real names)
    ctx.fillStyle = "#000";
    ctx.font = "bold 28px Arial";
    ctx.fillText("Your Name Here", canvas.width / 2, 220);
  
    // Achievement Text
    ctx.fillStyle = "#444";
    ctx.font = "18px Arial";
    ctx.fillText("has successfully completed the", canvas.width / 2, 270);
  
    // Quiz Title
    const selectedTopic = document.getElementById("quiz-form").dataset.topic;
    ctx.fillStyle = "#2c6e49";
    ctx.font = "22px Arial";
    ctx.fillText(quizData[selectedTopic].title + " Quiz", canvas.width / 2, 310);
  
    // Score Display
    ctx.fillStyle = "#444";
    ctx.font = "16px Arial";
    ctx.fillText(`Score: ${quizData[selectedTopic].questions.length} / ${quizData[selectedTopic].questions.length}`, canvas.width / 2, 350);
  
    // Date
    const date = new Date().toLocaleDateString();
    ctx.fillText(`Date: ${date}`, canvas.width / 2, 390);
  
    // Signature
    ctx.fillText("_____________________", canvas.width / 2, 460);
    ctx.fillText("Authorized Signature", canvas.width / 2, 490);
  
    // Add Download Functionality
    document.getElementById("downloadCertificate").addEventListener("click", function () {
      const link = document.createElement("a");
      link.download = "certificate.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  }
  
  