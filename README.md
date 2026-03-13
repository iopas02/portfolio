# Portfolio Website

## 🚀 Development Workflow

This CI/CD pipeline supports a safe development workflow:

### 📋 Workflow Steps

1. **Development Branch** (`development`)
   - Push your changes here
   - Pipeline checks HTML/CSS for errors
   - No deployment - just validation

2. **Create Pull Request**
   - From `development` → `master`
   - Pipeline validates again
   - Review and merge when ready

3. **Master Branch** (`master`)
   - After merge, pipeline deploys to GitHub Pages
   - Your website goes live!

### 🔧 Setup Commands

```bash
# Create development branch (if not exists)
git checkout -b development

# Make your changes
# ... edit files ...

# Push to development branch
git add .
git commit -m "Add new feature"
git push origin development

# When ready, create PR on GitHub
# Go to GitHub → Pull Requests → New PR
# Select development → master
```

### 🌐 Live Website

After merging to master, your site will be live at:
`https://[your-username].github.io/portfolio`

### ✅ What Gets Checked

- **HTML Validation**: Ensures valid HTML syntax
- **CSS Validation**: Checks CSS for errors and style issues

### 🎯 Best Practices

- ✅ Work on `development` branch for all changes
- ✅ Create PR to review before merging
- ✅ Fix any validation errors before merging
- ✅ Only `master` branch deploys to production

### 🤔 Troubleshooting

- **Check Actions tab** to see pipeline status
- **Read error messages** for fixing issues
- **Pipeline runs on every push** to catch errors early
