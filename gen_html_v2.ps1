$baseDir = "C:\Users\User\.gemini\antigravity\scratch\stackblitz-dashboard"
$outFile = "C:\Users\User\.gemini\antigravity\scratch\Mo_StackBlitz_V2.html"

$filesDict = @{}

Get-ChildItem -Path $baseDir -Recurse -File | ForEach-Object {
    $content = [System.IO.File]::ReadAllText($_.FullName, [System.Text.Encoding]::UTF8)
    $relPath = $_.FullName.Substring($baseDir.Length + 1).Replace("\", "/")
    $filesDict[$relPath] = $content
}

# Use .NET JavaScriptSerializer to avoid ConvertTo-Json issues with large strings or Unicode
Add-Type -AssemblyName System.Web.Extensions
$serializer = New-Object System.Web.Script.Serialization.JavaScriptSerializer
$serializer.MaxJsonLength = 50000000
$jsonFiles = $serializer.Serialize($filesDict)

$html = @"
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Opening StackBlitz...</title>
  <script src="https://unpkg.com/@stackblitz/sdk@1/bundles/sdk.umd.js"></script>
</head>
<body style="font-family: system-ui, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f8fafc;">
  <div style="text-align: center;">
    <h2 style="color: #0f172a; margin-bottom: 8px;">Đang tải dự án lên StackBlitz...</h2>
    <p style="color: #64748b;">Vui lòng đợi vài giây, cửa sổ sẽ tự động bật lên.</p>
  </div>
  <script>
    const files = $jsonFiles;

    StackBlitzSDK.openProject({
      title: 'Sales Dashboard',
      description: 'React + Vite + Tailwind Dashboard',
      template: 'node',
      files: files
    }, {
      openAs: 'fullscreen'
    });
  </script>
</body>
</html>
"@

[System.IO.File]::WriteAllText($outFile, $html, [System.Text.Encoding]::UTF8)
Write-Host "Created Mo_StackBlitz_V2.html successfully!"
