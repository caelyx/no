document.addEventListener('DOMContentLoaded', function() {
    // Parse the Markdown data
    const markdownData = parseMarkdown();
    
    // Render categories to the page
    renderCategories(markdownData);
    
    // Set up event listeners
    setupEventListeners();
});

function parseMarkdown() {
    // This is the content from the Markdown file
    const markdownContent = `# Work requests

## "No"

* "I appreciate you bringing this to me, but I don't think we can pursue this at our end."
* "After careful consideration, I've decided that's not a direction we'll be taking."
* "I value your initiative, though unfortunately this doesn't align with our current priorities."
* "I understand this matters to you, but I'm unable to approve this request."
* "While I see the potential benefits, I'm not comfortable proceeding with this proposal."
* "I've reviewed your request, and I'm sorry to say we won't be able to accommodate it."
* "I respect your perspective, but my decision on this matter stands."
* "I'm afraid that option isn't viable for us due to [brief reason if appropriate]."
* "That's a creative suggestion, though it's not something we can implement at this time."
* "I've given this considerable thought, and my answer is no."

## "Not now"

* "This isn't a priority for us this quarter, but let's revisit it in our planning for next quarter."
* "The timing isn't right at the moment. Can we schedule this for discussion in [specific timeframe]?"
* "I'd like to hold off on this until we've completed our current projects."
* "Let's table this discussion and come back to it once we've addressed our more pressing deadlines."
* "I'm keen to explore this further, but we need to focus on other priorities at present."
* "I suggest we park this idea temporarily and return to it when resources become available."
* "This isn't feasible with our current workload, but I'm open to considering it down the track."
* "We'll need to defer this until the new financial year when we reassess our budget allocation."
* "Let's put a pin in this for now while we gather more information."
* "I'd prefer to wait until we have more data before making a commitment."

## "I'm delegating this"

* "This is something that would benefit from [colleague's] expertise. I'll connect you with them."
* "I believe [team member] would be better positioned to help you with this request."
* "I'd like [colleague] to take point on this – they have more bandwidth than I do currently."
* "This falls within [department]'s remit. I'll point you in their direction."
* "I recommend discussing this with [colleague], who specializes in this area."
* "While I can't take this on personally, I'm happy to ask [team member] to collaborate with you on it."
* "I think [colleague] would be the best person to provide the support you need on this."
* "This isn't my area of expertise, but [team member] would be an excellent resource for you."
* "I'd like to hand this over to [colleague] who has more capacity to give it proper attention."
* "I'll ask [team member] to follow up with you as they're leading our initiatives in this space."

## "Setting Boundaries"

* "I need to protect our team's bandwidth, so we'll need to decline this request."
* "Taking this on would overextend our resources, which wouldn't be responsible management."
* "I'm mindful of our team's workload, and we simply don't have capacity for additional projects."
* "To maintain our focus on critical priorities, I need to say no to this request."
* "I'm responsible for ensuring our team doesn't become overcommitted, so we'll have to pass on this."
* "While I'd like to help, adding this to our plate would compromise our existing commitments."
* "My responsibility is to ensure our team's wellbeing, which means we can't take on anything more right now."
* "I'm protective of our team's time, and this would pull us away from our core objectives."
* "I'm conscious of not spreading our resources too thin, so we'll need to decline."
* "To maintain the quality of our work, I need to be selective about what we commit to."

## Alternatives

* "What if we approached this from a different angle? Perhaps we could [alternative suggestion]."
* "I can't approve this specific request, but here's what I can offer instead..."
* "Rather than pursuing that path, I'd recommend we focus our efforts on [alternative]."
* "Have you considered [alternative approach] as a potential solution?"
* "While that specific approach isn't feasible, I wonder if [alternative] might achieve similar outcomes."
* "I suggest we pivot slightly and look at [alternative] which aligns better with our objectives."
* "Instead of that approach, what about exploring [alternative option]?"
* "That specific proposal doesn't work for us, but I'd be supportive of [modified version]."
* "Let's try a different tack – perhaps [alternative] would be more achievable."
* "I see where you're heading with this. What if we modified the approach to [alternative]?"

# Meeting Requests

## "No"

* "I've reviewed the agenda and don't believe my input would be necessary for this discussion."
* "Given my current priorities, I don't have bandwidth for meetings outside my core responsibilities."
* "This topic falls outside my area of focus, so I'll need to decline."
* "I don't think I'd add value to this particular conversation."
* "I've checked my calendar against my quarterly objectives, and I need to protect my time for deliverables I've committed to."

## "I'm no longer going to attend"

* "I've noticed I haven't been able to contribute meaningfully to this recurring meeting. I'll step back unless specific topics arise that require my input."
* "Could we revisit the necessity of my attendance at this standing meeting? My involvement doesn't seem essential based on recent agendas."
* "I suggest rotating attendance from our team rather than having me join every session."
* "Could we reduce the frequency of this meeting? Monthly would be more manageable than weekly for me."
* "I'd like to propose moving to an exception-based model for my attendance - I'll join when there are agenda items requiring my specific input."

## "I'm delegating this"

* "My team member [name] would be better positioned to contribute to this discussion."
* "Given the topic, [colleague] would be more relevant to include than myself."
* "I think [team member] would add more value to this conversation based on their current work."
* "As this intersects with [colleague]'s responsibilities, they would be the appropriate person to involve."
* "I'd like to send [team member] in my place, as they're directly working on related initiatives."

## "I need to focus elsewhere"

* "I'm currently focusing on [specific priority] and need to decline meetings outside that scope."
* "I've implemented a new meeting policy to ensure I can deliver on my key objectives. This doesn't meet my criteria for attendance."
* "To be effective in my role, I need to be selective about which meetings I attend. I'll need to pass on this one."
* "I'm working to reduce my meeting load by 30% this quarter to increase my team's productivity."
* "I've set aside specific days for meetings, and unfortunately, this doesn't align with those times."

## "I'll help another way"

* "Rather than attend the full meeting, would you mind if I join for just the 10 minutes when you discuss [specific topic]?"
* "Could you share the meeting notes afterwards instead? I'd be happy to provide input asynchronously."
* "I won't be able to attend, but I'm happy to share my thoughts via email before the meeting."
* "Would a quick 10-minute chat beforehand work instead of my attendance at the full meeting?"
* "This doesn't require my real-time input. Could you send any specific questions my way after you've met?"

# Prospective Vendors

## "No"

* "Thank you for reaching out. We're not exploring new solutions in this area at present."
* "I appreciate your interest in working with us, but we're not in a position to consider new vendors at this time."
* "We've recently committed to a solution in this space and aren't looking to make changes for the foreseeable future."
* "After reviewing your materials, I've determined that your offering doesn't align with our current needs."
* "We've assessed our requirements and have decided not to pursue additional options in this category."
* "While your product seems valuable, it doesn't fit our technical ecosystem/workflow."
* "Our procurement calendar is set for the year, and we're not evaluating new vendors until next financial year."
* "We don't have the budget allocation to explore new solutions in this space currently."
* "Our team is fully committed to our existing roadmap and tools at this stage."
* "I've consulted with our team, and we're satisfied with our current provider in this area."

## "Not now"

* "We might be interested in learning more about your offering in Q3. Could you reach out again in [month]?"
* "We're in the middle of an internal restructure. Would you mind connecting after things settle in [timeframe]?"
* "Our review cycle for these tools begins in [month]. Please contact me then if you're still interested."
* "I'd be interested in a brief email overview rather than a meeting at this stage."
* "Could you send through some case studies from similar organisations first? That will help me determine if a meeting would be valuable."

## "I'm delegating this"

* "This would be better directed to our [department/person]. I'm copying them here so you can follow up directly."
* "While I'm not the right contact, [colleague] manages our procurement in this area."
* "Our company works with an approved vendor list managed by our procurement team at [email address]."
* "We have a formal process for vendor selection. Please submit your information through our supplier portal at [website]."
* "We're currently under contract with our existing provider, but you're welcome to register in our supplier database for future opportunities." `;

    const data = {};
    let currentCategory = null;
    let currentSubcategory = null;
    
    // Split content by lines
    const lines = markdownContent.split('\n');
    
    // Process each line
    for (let line of lines) {
        line = line.trim();
        
        // Category heading (# Category)
        if (line.startsWith('# ')) {
            currentCategory = line.substring(2);
            data[currentCategory] = {};
            currentSubcategory = null;
        } 
        // Subcategory heading (## Subcategory)
        else if (line.startsWith('## ')) {
            currentSubcategory = line.substring(3);
            if (currentCategory) {
                data[currentCategory][currentSubcategory] = [];
            }
        } 
        // List item (* "Quote")
        else if (line.startsWith('* ') && currentCategory && currentSubcategory) {
            // Extract the quote from the line (remove the * and trim)
            const quote = line.substring(2).trim();
            data[currentCategory][currentSubcategory].push(quote);
        }
    }
    
    return data;
}

function renderCategories(data) {
    const container = document.getElementById('categories-container');
    
    // CSS class names based on category (for styling)
    const cssClassMap = {
        'Work requests': 'work-requests',
        'Prospective Vendors': 'prospective-vendors',
        'Meeting Requests': 'unnecessary-meeting-requests'
    };
    
    // Create a section for each main category
    for (const category in data) {
        const cssClass = cssClassMap[category] || 'default-category';
        
        // Create category group container
        const categoryGroup = document.createElement('div');
        categoryGroup.className = `category-group ${cssClass}`;
        
        // Create category title
        const categoryTitle = document.createElement('div');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = category;
        categoryGroup.appendChild(categoryTitle);
        
        // Create buttons container
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'category-buttons';
        
        // Create a button for each subcategory
        for (const subcategory in data[category]) {
            const button = document.createElement('button');
            button.className = `category-button`;
            button.textContent = subcategory;
            button.dataset.category = category;
            button.dataset.subcategory = subcategory;
            buttonsContainer.appendChild(button);
        }
        
        categoryGroup.appendChild(buttonsContainer);
        container.appendChild(categoryGroup);
    }
}

function setupEventListeners() {
    const markdownData = parseMarkdown();
    const quoteOverlay = document.getElementById('quote-overlay');
    const quoteText = document.getElementById('quote-text');
    const retryButton = document.getElementById('retry-button');
    const closeButton = document.getElementById('close-button');
    
    let currentCategory, currentSubcategory;
    
    // Add click event listeners to all category buttons
    document.querySelectorAll('.category-button').forEach(button => {
        button.addEventListener('click', function() {
            currentCategory = this.dataset.category;
            currentSubcategory = this.dataset.subcategory;
            
            // Get a random quote from the selected category
            const quotes = markdownData[currentCategory][currentSubcategory];
            const randomQuote = getRandomQuote(quotes);
            
            // Display the quote
            showQuote(randomQuote);
        });
    });
    
    // Retry button - get another random quote from the same category
    retryButton.addEventListener('click', function() {
        const quotes = markdownData[currentCategory][currentSubcategory];
        const currentQuote = quoteText.textContent;
        let newQuote;
        
        // Make sure we get a different quote if there are multiple options
        if (quotes.length > 1) {
            do {
                newQuote = getRandomQuote(quotes);
            } while (newQuote === currentQuote && quotes.length > 1);
        } else {
            newQuote = quotes[0];
        }
        
        showQuote(newQuote);
    });
    
    // Close button - hide the overlay
    closeButton.addEventListener('click', function() {
        quoteOverlay.classList.add('hidden');
    });
}

function getRandomQuote(quotes) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function showQuote(quote) {
    const quoteOverlay = document.getElementById('quote-overlay');
    const quoteText = document.getElementById('quote-text');
    
    quoteText.textContent = quote;
    quoteOverlay.classList.remove('hidden');
}
