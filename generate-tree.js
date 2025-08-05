import fs from "fs";
import path from "path";

// Recursively generate directory tree as string
function generateTree(dir, prefix = "") {
  // Read directory contents with details
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  // Filter out unwanted folders like node_modules, .git, etc.
  const filteredEntries = entries.filter(
    (e) => !["node_modules", ".git", ".next", ".turbo"].includes(e.name)
  );

  // Get directories, sorted alphabetically
  const dirs = filteredEntries
    .filter((e) => e.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name));

  // Get files, sorted alphabetically
  const files = filteredEntries
    .filter((e) => !e.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name));

  // Combine directories first, then files
  const sortedEntries = [...dirs, ...files];

  // Map entries to tree string with branches
  const output = sortedEntries.map((entry, index) => {
    const isLast = index === sortedEntries.length - 1; // Check if last item
    const branch = isLast ? "└── " : "├── "; // Choose branch symbol
    const fullPath = path.join(dir, entry.name); // Full path of entry

    if (entry.isDirectory()) {
      // For directories, recurse into it with updated prefix
      return (
        prefix +
        branch +
        entry.name +
        "\n" +
        generateTree(fullPath, prefix + (isLast ? "    " : "│   "))
      );
    } else {
      // For files, just add the branch and name
      return prefix + branch + entry.name;
    }
  });

  // Join all lines into a single string
  return output.join("\n");
}

// Generate tree from current directory
const tree = generateTree(".");

// Print the tree to console
console.log(tree);

// Run this script in project root using: node generate-tree.js
