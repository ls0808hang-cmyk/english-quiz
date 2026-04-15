# Blueprint: English Quiz Hub

## Overview
A comprehensive web-based platform for English vocabulary learning. It features interactive multiple-choice quizzes, a persistent "Wrong Answer Notebook" for review, and a suite of educational guides. The system integrates with a real-time dictionary API to provide accurate phonetics and example sentences.

## Current State
- **Core Files:** `index.html`, `assets/css/style.css`, `assets/js/main.js`.
- **Pages & Content:**
    - `index.html`: Revamped homepage with integrated quiz, progress tracking, and feature highlights.
    - `about.html`, `faq.html`, `contact.html`, `privacy.html`, `terms.html`: Consistent modern UI with sticky headers and responsive layouts.
    - `guides/`: A full set of 7 educational guides (Beginner, Memorization, Wrong Note, Daily Plan, Travel, Business, Korean Mistakes).
- **Functionality:**
    - **Quiz System:** 200-word database, randomized options, real-time phonetic and example fetching via API.
    - **Gamification:** Daily goal tracking (20 words), progress bar, and correct answer streak counter.
    - **Review System:** Automated "Wrong Answer Notebook" saving missed words to LocalStorage with a dedicated "Review Mode" quiz.
    - **UX/UI:** Modern, card-based responsive design using CSS variables and Pretendard font. Sticky navigation and unified branding.
- **SEO & Connectivity:**
    - Integrated Google and Naver site verifications.
    - Open Graph tags and canonical URLs for better social sharing and search ranking.

## Implementation History
1.  **Switch to Multiple Choice:** [COMPLETED]
    - Migrated from text input to an interactive button grid.
2.  **Modern UI Revamp:** [COMPLETED]
    - Introduced a professional, airy design with soft shadows and a blue-centric color palette.
    - Implemented a sticky navigation header across all pages.
3.  **Educational Hub Expansion:** [COMPLETED]
    - Developed and unified 7 distinct learning guides to provide context beyond simple testing.
4.  **UX & Feedback Tuning:** [COMPLETED]
    - Added toast notifications, progress animations, and immediate feedback for correct/wrong answers.
    - Standardized messaging for loading and empty states.

## Future Roadmap
- **Social Integration:** Allow users to share their daily progress or streaks.
- **Enhanced Data:** Support for multiple word lists or difficulty levels.
- **Persistence:** Optional Firebase integration for cross-device synchronization.
- **Multimedia:** Integrated audio playback for all words (Web Speech API currently active).
