#!/bin/bash

# Cleanup Script for Tharros Training & Coaching Website
# This script removes unused files, images, and assets identified in the analysis

echo "🧹 Starting cleanup of unused files..."
echo "📁 Project: Tharros Training & Coaching Website"
echo "📅 Date: $(date)"
echo ""

# Change to project directory
cd "$(dirname "$0")"

echo "1️⃣ Removing unused images..."

# Delete unused images
if [ -f "public/images/groeps01.jpeg" ]; then
    rm "public/images/groeps01.jpeg" && echo "   ✅ Deleted groeps01.jpeg"
fi

if [ -f "public/images/lecture.jpeg" ]; then
    rm "public/images/lecture.jpeg" && echo "   ✅ Deleted lecture.jpeg"  
fi

if [ -f "public/images/Profil_ferdi.jpeg" ]; then
    rm "public/images/Profil_ferdi.jpeg" && echo "   ✅ Deleted Profil_ferdi.jpeg"
fi

if [ -f "public/images/profil.jpg" ]; then
    rm "public/images/profil.jpg" && echo "   ✅ Deleted profil.jpg"
fi

if [ -f "public/images/frida-kahlo.jpg" ]; then
    rm "public/images/frida-kahlo.jpg" && echo "   ✅ Deleted frida-kahlo.jpg"
fi

if [ -f "public/images/mozaiek-vrouwengezicht.jpg" ]; then
    rm "public/images/mozaiek-vrouwengezicht.jpg" && echo "   ✅ Deleted mozaiek-vrouwengezicht.jpg"
fi

echo ""
echo "2️⃣ Removing unused logos..."

# Delete unused logos
if [ -f "public/Logo_tharros.png" ]; then
    rm "public/Logo_tharros.png" && echo "   ✅ Deleted Logo_tharros.png"
fi

if [ -f "public/Logo_tharros_transparent.png" ]; then
    rm "public/Logo_tharros_transparent.png" && echo "   ✅ Deleted Logo_tharros_transparent.png"
fi

if [ -f "public/Logo_tharros_transparent02.png" ]; then
    rm "public/Logo_tharros_transparent02.png" && echo "   ✅ Deleted Logo_tharros_transparent02.png"
fi

if [ -f "public/TharrosLogoWhite.png" ]; then
    rm "public/TharrosLogoWhite.png" && echo "   ✅ Deleted TharrosLogoWhite.png"
fi

echo ""
echo "3️⃣ Removing unused components..."

# Delete unused components
if [ -f "src/components/FerdiProfile.tsx" ]; then
    rm "src/components/FerdiProfile.tsx" && echo "   ✅ Deleted components/FerdiProfile.tsx"
fi

if [ -f "src/components/LectureOmarnen.jsx" ]; then
    rm "src/components/LectureOmarnen.jsx" && echo "   ✅ Deleted components/LectureOmarnen.jsx"
fi

echo ""
echo "4️⃣ Removing system files..."

# Delete .DS_Store files
find . -name ".DS_Store" -delete 2>/dev/null
echo "   ✅ Deleted .DS_Store files"

echo ""
echo "🎉 Cleanup completed successfully!"
echo ""
echo "📊 Summary:"
echo "   • Removed unused images"
echo "   • Removed unused logos" 
echo "   • Removed unused components"
echo "   • Removed system files"
echo ""
echo "⚠️  Remember to:"
echo "   • Test the website thoroughly"
echo "   • Check for any broken references"
echo "   • Commit these changes to git"
echo ""
echo "🔍 To verify no broken references, run:"
echo "   grep -r 'images/' src/ --include='*.tsx' --include='*.jsx'"
echo "   grep -r 'Logo' src/ --include='*.tsx' --include='*.jsx'"
echo ""
