# Quick Fix - Run These Commands

## 🔧 Copy and Paste These Commands

Open PowerShell in the backend folder and run:

```powershell
# Remove old installation
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue

# Fresh install (without TensorFlow)
npm install

# Start the server
npm run dev
```

---

## ✅ Expected Output

After `npm install`:
```
added 150 packages in 30s
```

After `npm run dev`:
```
Server running on port 5000
MongoDB connected
```

---

## 🎯 One-Line Fix

```powershell
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue; Remove-Item package-lock.json -ErrorAction SilentlyContinue; npm install; npm run dev
```

---

**That's it! Backend will start without errors! 🚀**
