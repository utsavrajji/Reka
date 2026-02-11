# Reduce Contact Popup Size Implementation Plan (Attempt 2)

## Overview
The user reported that the contact popup on mobile was still not small enough. I need to aggressively reduce the size and target more devices.

## Changes Made
### 1. File Modified: `components/ui/ContactPopup.css`
- **Updated Media Queries**:
  - **Applied to `max-width: 640px`** (covering large phones and small tablets):
    - `max-width: 340px` (Explicit hard limit).
    - Reduced `padding` to `1rem`.
    - Reduced font sizes for `h2` (1.25rem), `p` (0.8rem), labels (0.75rem), and inputs (0.85rem).
    - Reduced `margin-bottom` for headers.
    - Reduced `gap` in form.
    - Reduced border radius for a slimmer feel.
  - **Added `max-width: 380px`** (Older/Smaller phones):
    - Even smaller padding (`0.75rem`).
    - Slightly smaller title (`1.1rem`).

## Result
The popup is now significantly more compact on all mobile devices, with smaller text, tighter spacing, and a restricted maximum width.
