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

# Build the site
echo "🏗️  Building site..."
bun run build

# Deploy
echo "📤 Deploying to GitHub Pages..."
cd dist
git add -A
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"
git push

cd ..
echo "📝 Pushing source changes..."
git push

echo "✅ Deployment complete!"
