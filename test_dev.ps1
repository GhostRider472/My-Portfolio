$p = Start-Process -FilePath 'cmd.exe' -ArgumentList '/c','npm run dev' -NoNewWindow -PassThru -RedirectStandardOutput 'dev_out.txt' -RedirectStandardError 'dev_err.txt'
Start-Sleep -Seconds 10
if (-not $p.HasExited) { $p.Kill() }
Get-Content 'dev_out.txt'
Get-Content 'dev_err.txt'
