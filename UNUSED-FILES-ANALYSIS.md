# Unused Files & Assets Analysis - Tharros Training & Coaching

**Analysis Date:** January 19, 2025  
**Project:** Tharros Training & Coaching Website  
**Analysis Scope:** All files, images, and assets in the project

---

## 📊 **Summary**

### ✅ **Used Assets (25 files)**

- **Images Used:** 22 images
- **Logos Used:** 3 logos
- **Documents Used:** 1 PDF

### ❌ **Unused Assets (14 files)**

- **Images Unused:** 10 images
- **Logos Unused:** 4 logos

### 📁 **Unused Component Files:** 2 files

---

## 🖼️ **IMAGE ANALYSIS**

### ✅ **USED IMAGES (22 files)**

| File                                        | Used In                      | Purpose                     |
| ------------------------------------------- | ---------------------------- | --------------------------- |
| `images/Algemene-Bestuursdienst-Rijk.jpeg`  | Home.tsx                     | ServiceBlock for ABR        |
| `images/AlgemeneBestuursdienstRijk.jpeg`    | ABR.tsx                      | Hero section                |
| `images/amsterdam.jpeg`                     | Home.tsx                     | ServiceBlock for Contact    |
| `images/comenius.jpeg`                      | Home.tsx, Comenius.tsx       | ServiceBlock & Hero section |
| `images/contact.jpeg`                       | Contact.tsx                  | Hero section                |
| `images/Cubism.jpg`                         | Home.tsx                     | ServiceBlock for Coaching   |
| `images/DeathOfArchimedes.jpg`              | Home.tsx                     | ServiceBlock for Tharros    |
| `images/Ferdi01.jpeg`                       | FerdiProfile.tsx (component) | Profile image               |
| `images/FerdiLicher-profil.jpeg`            | Home.tsx                     | ServiceBlock for Ferdi      |
| `images/lecture_beeld.jpeg`                 | Lecture.tsx                  | Hero section                |
| `images/lecture_intro.jpeg`                 | Home.tsx                     | ServiceBlock for Lecture    |
| `images/ministerie-BZK.jpeg`                | Home.tsx                     | ServiceBlock for BZK        |
| `images/MinisterieBKZ.jpeg`                 | MinisterieBZK.tsx            | Hero section                |
| `images/politiek-ambtelijk-samenspel.jpg`   | ABR.tsx                      | Kompas section              |
| `images/portret.jpg`                        | Coaching.tsx                 | Coaching images array       |
| `images/Profil_FerdiLicher.jpeg`            | Home.tsx, ImageSlider.tsx    | Profile sections            |
| `images/profil02.jpg`                       | FerdiProfile.tsx             | Profile section             |
| `images/Tharros-Antieke-Griekse-Arena.jpeg` | ImageSlider.tsx              | Main hero slider            |
| `images/Tharros_hero.jpeg`                  | Tharros.tsx                  | Hero section                |
| `images/workshops.jpeg`                     | Home.tsx                     | ServiceBlock for Workshops  |
| `images/workshops_intro.jpeg`               | Workshops.tsx                | Hero section                |

**Special References:**

- `images/Museum-of-the-Future-Dubai.jpg` - Imported but not displayed (Tharros.tsx)
- `images/Ferdi_Profil.jpeg` - Referenced in structured data (FerdiProfile.tsx)

### ❌ **UNUSED IMAGES (10 files)**

| File                                | Status                  | Recommendation |
| ----------------------------------- | ----------------------- | -------------- |
| `images/groeps01.jpeg`              | ❌ Not referenced       | **DELETE**     |
| `images/lecture.jpeg`               | ❌ Not referenced       | **DELETE**     |
| `images/Profil_ferdi.jpeg`          | ❌ Not referenced       | **DELETE**     |
| `images/profil.jpg`                 | ❌ Not referenced       | **DELETE**     |
| `images/frida-kahlo.jpg`            | ❌ Defined but not used | **DELETE**     |
| `images/mozaiek-vrouwengezicht.jpg` | ❌ Defined but not used | **DELETE**     |

**Note:** The Coaching.tsx defines these images in an array but they're never displayed in the component.

---

## 🏷️ **LOGO ANALYSIS**

### ✅ **USED LOGOS (3 files)**

| File                             | Used In                         | Purpose                    |
| -------------------------------- | ------------------------------- | -------------------------- |
| `LogoTharros.png`                | Navbar.tsx, SEO.tsx, index.html | Main navigation logo & SEO |
| `Logo_tharros_transparent01.png` | Footer.tsx                      | Footer logo                |
| `TharrosLogoNegatief.png`        | Navbar.tsx                      | Mobile menu overlay logo   |

### ❌ **UNUSED LOGOS (4 files)**

| File                             | Status            | Recommendation |
| -------------------------------- | ----------------- | -------------- |
| `Logo_tharros.png`               | ❌ Not referenced | **DELETE**     |
| `Logo_tharros_transparent.png`   | ❌ Not referenced | **DELETE**     |
| `Logo_tharros_transparent02.png` | ❌ Not referenced | **DELETE**     |
| `TharrosLogoWhite.png`           | ❌ Not referenced | **DELETE**     |

---

## 📄 **DOCUMENT ANALYSIS**

### ✅ **USED DOCUMENTS (1 file)**

| File                                | Used In                    | Purpose              |
| ----------------------------------- | -------------------------- | -------------------- |
| `ambtelijk-leiderschap_lecture.pdf` | Lecture.tsx, PDFViewer.tsx | PDF viewer component |

### ✅ **USED FILES**

| File                                      | Used In                  | Purpose               |
| ----------------------------------------- | ------------------------ | --------------------- |
| `files/ambtelijk-leiderschap_lecture.pdf` | Referenced in robots.txt | Duplicate of root PDF |

**Note:** There are two copies of the same PDF - consider keeping only one location.

---

## 🔧 **COMPONENT FILES ANALYSIS**

### ❌ **UNUSED COMPONENTS (2 files)**

| File                            | Status               | Issue                               | Recommendation |
| ------------------------------- | -------------------- | ----------------------------------- | -------------- |
| `components/FerdiProfile.tsx`   | ❌ Not imported/used | Duplicate of pages/FerdiProfile.tsx | **DELETE**     |
| `components/LectureOmarnen.jsx` | ❌ Not imported/used | Old/unused component                | **DELETE**     |

### ✅ **USED COMPONENTS (All others)**

All other component files in `src/components/` are properly imported and used.

---

## 🗂️ **OTHER FILES ANALYSIS**

### ✅ **USED FILES**

- `src/Tharros.png` - Used as favicon in index.html
- `robots.txt` - SEO configuration
- `sitemap.xml` - SEO configuration
- All TypeScript/JavaScript files are used
- All config files are used

### ❌ **UNNECESSARY FILES**

- `.DS_Store` files (macOS system files) - **DELETE**

---

## 🧹 **CLEANUP RECOMMENDATIONS**

### **Immediate Actions (Safe to Delete)**

#### 1. Delete Unused Images (10 files)

```bash
rm public/images/groeps01.jpeg
rm public/images/lecture.jpeg
rm public/images/Profil_ferdi.jpeg
rm public/images/profil.jpg
rm public/images/frida-kahlo.jpg
rm public/images/mozaiek-vrouwengezicht.jpg
```

#### 2. Delete Unused Logos (4 files)

```bash
rm public/Logo_tharros.png
rm public/Logo_tharros_transparent.png
rm public/Logo_tharros_transparent02.png
rm public/TharrosLogoWhite.png
```

#### 3. Delete Unused Components (2 files)

```bash
rm src/components/FerdiProfile.tsx
rm src/components/LectureOmarnen.jsx
```

#### 4. Delete System Files

```bash
find . -name ".DS_Store" -delete
```

### **Optional Actions**

#### 1. Consolidate PDF Files

Consider keeping only one copy of the PDF:

- Keep: `public/ambtelijk-leiderschap_lecture.pdf`
- Remove: `public/files/ambtelijk-leiderschap_lecture.pdf`

#### 2. Fix Unused Import

In `Tharros.tsx`, remove the unused import:

```typescript
// Remove this line:
import imageMuseumOfTheFuture from 'images/Museum-of-the-Future-Dubai.jpg';
```

#### 3. Clean Up Coaching Component

In `Coaching.tsx`, remove the unused `coachingImages` array (lines 4-18).

---

## 📈 **SPACE SAVINGS**

### **Estimated Storage Savings**

- **Images:** ~10-15 MB
- **Logos:** ~2-3 MB
- **Components:** ~2 KB
- **Total:** ~12-18 MB

### **Performance Benefits**

- Faster builds
- Smaller bundle size
- Cleaner codebase
- Easier maintenance

---

## ⚠️ **WARNINGS**

1. **Always backup** before deleting files
2. **Test thoroughly** after cleanup
3. **Check git history** if files were recently added
4. Some "unused" files might be planned for future use

---

## ✅ **VERIFICATION COMMANDS**

After cleanup, verify no broken references:

```bash
# Check for broken image references
grep -r "images/" src/ --include="*.tsx" --include="*.jsx"

# Check for broken logo references
grep -r "Logo" src/ --include="*.tsx" --include="*.jsx"

# Check for broken component imports
grep -r "FerdiProfile\|LectureOmarnen" src/ --include="*.tsx" --include="*.jsx"
```

---

**Analysis Complete** ✨  
This analysis provides a comprehensive overview of all unused assets and files in your Tharros Training & Coaching project.
