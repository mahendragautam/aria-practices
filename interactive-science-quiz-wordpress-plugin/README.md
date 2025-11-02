# Interactive Science Quiz - WordPress Plugin

An engaging, interactive science quiz plugin for WordPress with 20 chapters, 5 difficulty levels, animated emojis, and comprehensive responsive design.

## Features

### Quiz Structure
- **20 Chapters**: Each with unique science questions covering Biology, Physics, Chemistry, and Astronomy
- **5 Difficulty Levels per Chapter**:
  - **Easy**: True/False questions (10 questions)
  - **Medium**: 2 options (10 questions)
  - **Hard**: 3 options (10 questions)
  - **Expert**: 4 options (10 questions)
  - **Extreme**: Text input with "Show Answer" feature (10 questions)
- **1000 Total Questions**: No repeated questions across any chapters

### Visual Features
- 🎨 **Themed Color Palette**: Each chapter has a unique background color
- 😊 **Animated Emojis**: 2+ emojis animate for each question
- 💫 **Falling Emoji Animations**: Emojis fall from the top after answering (desktop only)
- 🎯 **Topic Badges**: Display whether question is from Biology, Physics, Chemistry, or Astronomy
- 📊 **Progress Bar**: Visual progress indicator with question counter

### User Experience
- ✅ **Smart Feedback**: Positive words for correct answers, encouraging words for wrong answers
- 🏆 **Badge System**:
  - 8-10 score: Master badge 🏆🌟
  - 4-7 score: Good badge 📚💪
  - 1-3 score: Beginner badge 🌱📖
- ⏱️ **Timer**: Tracks time taken to complete quiz
- 🔄 **Question Shuffling**: Questions shuffle when retaking quiz
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop

### Responsive Design Features
- **Desktop**: Full-screen with falling emoji animations
- **Tablet**: Optimized layout, no falling emojis
- **Mobile**:
  - Full-screen size
  - Left-aligned answer text
  - No falling emojis
  - Smaller emoji containers
  - Compact progress bar
  - White background
  - 2-column answer layout maintained

## Installation

### Method 1: Upload via WordPress Admin

1. Download the `interactive-science-quiz-wordpress-plugin` folder
2. Zip the entire folder
3. Go to WordPress Admin → Plugins → Add New → Upload Plugin
4. Choose the zip file and click "Install Now"
5. Activate the plugin

### Method 2: Manual Installation

1. Download the `interactive-science-quiz-wordpress-plugin` folder
2. Upload to `/wp-content/plugins/` directory via FTP
3. Go to WordPress Admin → Plugins
4. Activate "Interactive Science Quiz"

## Usage

### Adding Quiz to a Page

1. Create or edit a page/post in WordPress
2. Add the following shortcode:

```
[science_quiz]
```

3. Publish the page
4. The quiz will appear on the page

### File Structure

```
interactive-science-quiz-wordpress-plugin/
│
├── interactive-science-quiz.php    (Main plugin file)
│
├── assets/
│   ├── css/
│   │   └── quiz-style.css         (All styles and animations)
│   │
│   └── js/
│       └── quiz-script.js         (Quiz logic and interactions)
│
├── data/
│   └── questions-data.php         (Question database)
│
├── templates/
│   └── quiz-template.php          (HTML structure)
│
└── README.md                      (This file)
```

## Customization

### Adding More Chapters (6-20)

To complete the full 1000-question database, edit `/data/questions-data.php` and add chapters 6-20 following this pattern:

```php
'chapter6' => array(
    'name' => 'Chapter 6',
    'color' => '#E5FFFF',
    'levels' => array(
        'easy' => array(
            // 10 True/False questions
        ),
        'medium' => array(
            // 10 questions with 2 options
        ),
        'hard' => array(
            // 10 questions with 3 options
        ),
        'expert' => array(
            // 10 questions with 4 options
        ),
        'extreme' => array(
            // 10 text input questions
        )
    )
),
```

### Question Format

**Multiple Choice Questions**:
```php
array(
    'topic' => 'Biology',
    'question' => 'The question text',
    'options' => array('Option 1', 'Option 2'),
    'correct' => 0,  // Index of correct answer (0-based)
    'emoji' => '🧬🔬'  // 2+ emojis separated by space
)
```

**Text Input Questions (Extreme Level)**:
```php
array(
    'topic' => 'Physics',
    'question' => 'The question text',
    'answer' => 'Correct answer',
    'emoji' => '⚡🔬'
)
```

### Styling Customization

Edit `/assets/css/quiz-style.css` to customize:
- Colors and themes
- Button styles
- Animation speeds
- Responsive breakpoints
- Font sizes and families

### Adding Topics

To add more topics beyond Biology, Physics, Chemistry, and Astronomy:
1. Add questions with new topic names in `questions-data.php`
2. The topic badges will automatically display the new topics

## Technical Details

### Dependencies
- WordPress 5.0+
- jQuery (included with WordPress)

### Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- Lightweight CSS and JavaScript
- Questions loaded once and cached
- Efficient DOM manipulation with jQuery
- Optimized animations for smooth performance

## Features Explained

### Falling Emoji Animation
- Activates after selecting an answer
- Different emojis for correct (✅🎉⭐) and wrong (❌💭🤔) answers
- Includes question-specific emojis
- Continues until "Next" button is clicked
- Automatically disabled on mobile/tablet for performance

### Question Shuffling
- Uses Fisher-Yates shuffle algorithm
- Questions randomized each time quiz is taken
- Ensures different question order for retakes

### Answer Validation
- Instant feedback on selection
- Correct answer highlighted in green
- Wrong answer highlighted in red
- Answer text aligned with justify (desktop) and left (mobile)

### Badge System
- **Master (8-10)**: 🏆🌟 with celebration emojis 🎉🎊✨
- **Good (4-7)**: 📚💪 with encouraging emojis 👍📚
- **Beginner (1-3)**: 🌱📖 with learning emojis 🌱📖🔍

## Troubleshooting

### Quiz doesn't appear
- Make sure plugin is activated
- Verify shortcode is correct: `[science_quiz]`
- Check browser console for JavaScript errors

### Styles not loading
- Clear WordPress cache
- Hard refresh browser (Ctrl+F5)
- Check if CSS file exists in `/assets/css/`

### Questions not loading
- Verify `questions-data.php` has no PHP syntax errors
- Check WordPress debug log for errors

## Future Enhancements

- Import/export questions via CSV
- Custom quiz creation interface
- Leaderboard system
- Email results functionality
- Social sharing integration
- Multi-language support
- Question categories and filtering

## Credits

- Developed for educational purposes
- Emoji support via Unicode standards
- Responsive design following modern best practices

## License

This plugin is licensed under GPL v2 or later.

## Support

For issues, questions, or feature requests, please refer to the plugin documentation or contact the developer.

---

**Version**: 1.0.0
**Last Updated**: 2025
**Author**: Interactive Science Quiz Team
