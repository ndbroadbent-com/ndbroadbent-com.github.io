#!/bin/bash
set -euo pipefail

echo "🚀 Deploying ndbroadbent.com..."

# Initialize nested git repo for dist if it doesn't exist
if [ ! -d dist/.git ]; then
  echo "📂 Initializing dist directory git repo..."
  rm -rf dist
  REMOTE="$(git remote get-url origin)"
  git clone "${REMOTE}" dist
  (cd dist && git checkout master)
fi

# Backup .git directory before build
echo "💾 Backing up dist/.git..."
if [ -d dist/.git ]; then
  mv dist/.git /tmp/dist-git-backup
fi

# Build the site
echo "🏗️  Building site..."
bun run build

# Restore .git directory after build
echo "♻️  Restoring dist/.git..."
if [ -d /tmp/dist-git-backup ]; then
  mv /tmp/dist-git-backup dist/.git
fi

# Add .nojekyll to disable Jekyll processing on GitHub Pages
echo "📝 Adding .nojekyll file..."
touch dist/.nojekyll

# Deploy
echo "📤 Deploying to GitHub Pages..."
cd dist
git add -A
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"
git push origin master

cd ..
echo "📝 Pushing source changes..."
git push

echo "✅ Deployment complete!"
