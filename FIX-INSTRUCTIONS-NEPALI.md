# Quiz Subject Load Problem - Solution (Nepali)

## Problem Ko Karan

Timro quiz ma **Science, English, Health, Technology** - yo 4 ta subjects le kam gariracha.
Tara **Math, History, Geography, Environment, Business, Parenting** - yo 6 ta click garda kam gardaina.

### Kinaki?
Yo 6 ta subjects ko JavaScript files **WordPress ma load bhairako chhaina**!

---

## Solution - Step by Step

### Step 1: Check Kun Load Bhayo, Kun Bhayena

1. Timilai quiz page kholnu
2. **F12** press garnu (Browser Console kholnalai)
3. `check-loaded-subjects.js` file ko code copy garnu
4. Console ma paste garnu ra **Enter** press garnu
5. Report dekhauchha - kun load bhayo (✅) kun bhayena (❌)

---

### Step 2: Missing Subjects Lai WPCode Ma Add Garnu

WordPress Dashboard ma janu:

**Dashboard > Code Snippets > Add Snippet**

Har ek missing subject ko lagi yo steps follow garnu:

#### Example: Math Questions Add Garne

1. **Add New Snippet** click garnu
2. **Title**: `Math Questions`
3. **Code Type**: JavaScript
4. **Code**: `math-questions.js` file ko purai code copy-paste garnu
5. **Insert Method**:
   - Auto Insert ✅
   - Location: **Footer**
   - Priority: **11** (Subject haru lai 10-19 rakhnuparcha)
6. **Save Changes & Activate** button click garnu
7. Toggle switch **ON** gara activate garnu

#### Priority Number Rules:
- Science: 10
- Math: 11
- History: 12
- Geography: 13
- English: 14
- Health: 15
- Environment: 16
- Business: 17
- Technology: 18
- Parenting: 19
- **quiz-master-app.js: 20** (Yo sabai bhanda pachhi load hunu parcha!)

---

### Step 3: Sabai Subjects Ko Lagi Repeat Garnu

Yo same process repeat garnu har ek missing subject ko lagi:

1. ❌ Math Questions → `math-questions.js` (Priority: 11)
2. ❌ History Questions → `history-questions.js` (Priority: 12)
3. ❌ Geography Questions → `geography-questions.js` (Priority: 13)
4. ❌ Environment Questions → `environment-questions.js` (Priority: 16)
5. ❌ Business Questions → `business-questions.js` (Priority: 17)
6. ❌ Parenting Questions → `parenting-questions.js` (Priority: 19)

**Note**: English (14), Health (15), Technology (18) already working means they're already added!

---

### Step 4: Verify Garnu

1. Sabai subjects add garye pachhi
2. Quiz page refresh garnu (Ctrl+F5 or Cmd+R)
3. Feri `check-loaded-subjects.js` run garnu console ma
4. Sabai ma ✅ dekhnu parcha!

---

## Common Mistakes:

### ❌ Wrong Priority
Agar subject priority 20 or higher xa bhane, it won't work!
**Subjects: 10-19, Master App: 20**

### ❌ Snippet Deactivated
WPCode ma snippet add garye tara **toggle OFF** xa bhane load hudaina!
**Make sure toggle is ON (green)**

### ❌ Wrong Location
Location **Footer** ma hunu parcha, Header ma bhaye hudaina!

### ❌ Code Incomplete
Purai file copy garnu - first line dekhi last line samma!

---

## Test Garnu

Sabai fix garye pachhi:

1. Quiz page ma janu
2. Har ek subject ma click garnu:
   - Math ✅
   - History ✅
   - Geography ✅
   - Business ✅
   - Environment ✅
   - Parenting ✅

3. Chapters dekhauna parcha, click garna milnu parcha!

---

## Help Chaahiyo Bhane

Agar still problem xa bhane:

1. Console ma error check garnu (F12 > Console tab)
2. Red color error messages screenshot linu
3. Active snippets ko list screenshot linu
   - Dashboard > Code Snippets > Snippets List

---

## Quick Checklist:

- [ ] All 10 subject JS files WPCode ma add gareko?
- [ ] Priority correctly set gareko? (10-19 for subjects, 20 for master)
- [ ] Location = Footer?
- [ ] Insert Method = Auto Insert?
- [ ] Sabai snippets ACTIVATED (toggle ON)?
- [ ] quiz-master-app.js pani properly loaded xa?
- [ ] Browser cache clear gareko? (Ctrl+Shift+Delete)

---

**Yo fix garye pachhi timilai quiz perfect kaam garchha! 🎉**
