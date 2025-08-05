# ✦ generate-folder-tree ✦

A simple Node.js script to generate a visually organized tree view of your project folder structure, excluding common unwanted directories like `node_modules`, `.git`, `.next`, and `.turbo`. This tool helps developers quickly visualize and document their project layout in the terminal or export it to a file.

---

## ✦ Features

- ✦ Recursively lists all directories and files  
- ✦ Sorts directories and files alphabetically  
- ✦ Excludes common large or irrelevant folders (`node_modules`, `.git`, etc.)  
- ✦ Prints a tree structure similar to the Unix `tree` command  
- ✦ Outputs to console or can be redirected to a file  

---

## ✦ Prerequisites

- ✦ Node.js installed (v12 or higher recommended)  
- ✦ Basic familiarity with running scripts in the terminal  

---

## ✦ Installation & Usage

1. Clone or download this repository to your local machine:

   ```bash
   git clone https://github.com/kamrulislambappy/generate-folder-tree.git
   cd generate-folder-tree
   ```
   
2. Run this script in project root using:

   ```bash
   node generate-tree.js
   ```
