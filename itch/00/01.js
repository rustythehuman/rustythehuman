

# BITSY VERSION 8.1

! VER_MAJ 8
! VER_MIN 1
! ROOM_FORMAT 1
! DLG_COMPAT 0
! TXT_MODE 0

PAL 0
0,0,0
128,128,128
255,255,255

ROOM 0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,a,a,a,a,a,a,a,a,a,a,a,a,a,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,a,a,a,a,a,a,a,a,a,a,a,a,a,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
ITM 0 3,4
ITM 0 6,16
ITM 1 12,2
PAL 0

TIL a
11111111
11111111
11111111
11111111
11111111
11111111
11111111
11111111

SPR A
00011000
00011000
00011000
00111100
01111110
10111101
00100100
00100100
POS 0 9,6
BGC *

SPR a
00000000
00000000
01010001
01110001
01110010
01111100
00111100
00100100
NAME cat1
DLG 0
POS 0 12,9

SPR b
00000000
00000000
01010001
01110001
01110010
01111100
00111100
00100100
NAME cat2
DLG 1
POS 0 6,10

SPR c
00000000
00000000
01010001
01110001
01110010
01111100
00111100
00100100
NAME cat3
DLG 2
POS 0 6,4

ITM 0
00000000
00000000
00000000
00111100
01100100
00100100
00011000
00000000
NAME tea

ITM 1
00000000
00111100
00100100
00111100
00010000
00011000
00010000
00011000
NAME key
BLIP 2

DLG 0
boo
NAME cat2 dialog

DLG 1
"""
test
test test test test test test
test test test test test test
test test test test test test
test test test test test test
test test test test test test
test test test test test 
"""
NAME cat1 dialog

DLG 2
ummm yes
NAME cat3 dialog

VAR a
42
