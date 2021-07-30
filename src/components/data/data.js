const dummyData = [
    {
        id:1,
        img: "https://img.championat.com/s/735x490/news/big/z/c/lokomotiv-prodast-liderov-chto-proishodit_1627470682428042079.jpg",
        date: "28.07.21",
        title: "Болельщикам «Локомотива» не стоит паниковать",
        text: "Уверен, куратор спортивного направления «Локо» Ральф Рангник не будет сам себе её портить. Слишком уж мощно в Германии обсуждали приход его компании в Россию."
    },
    {
        id:2,
        img: "http://donbass.ua/multimedia/images/news/original/2011/04/25/breitbyrg.jpg",
        date: "21.05.21",
        title: "Ким и Валерия Брейтбурги написали книгу про искусство.",
        text: "Работа над книгой велась более пяти лет, и действенные методики, описанные в ней, созданные в результате анализа и синтеза идей…"
    },
    {
        id:3,
        img: "https://cdn66.printdirect.ru/cache/product/e1/78/447440/tov/all/400z400_front_29_0_0_0_268f93d1135e13150605d2066674.jpg",
        date: "25.01.20",
        title: "Юрий Колокольников пытается спасти Землю в клипе «Космические силы»",
        text: "Премьера клипа «Космические силы» группы «Мумий Тролль» состоялась 6 ноября 2020 года."
    },
    {
        id:4,
        img: "https://i.pinimg.com/originals/14/8f/ea/148feadde119932cefbdc8c1854b1af1.png",
        date: "05.03.19",
        title: "BTS получили четыре награды MTV EMA",
        text: "BTS получили четыре награды MTV EMA 27-я ежегодная церемония награждения MTV Europe Music Awards состоялась 8 ноября 2020 г."
    },
    {
        id:5,
        img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYYGBgaGhoeHBwcHSEaHB4dIR4eGh4hHiEcIy4lHCErIR8cJjgmKy8xNTU1ISQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMABBgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAQIDBQYAB//EAEIQAAIBAgQDBQYEBAUCBgMAAAECEQAhAwQSMUFRYQUicYGRBhMyQqGxUsHR8CNicuEHFIKy8RWiJDNjwtLiU3OD/8QAGQEBAQEBAQEAAAAAAAAAAAAAAQACAwQF/8QAIBEBAQEAAwEBAAIDAAAAAAAAAAERAiExQRJhcQMyQv/aAAwDAQACEQMRAD8A2bb03VTil673Zr5z2u0jjTbjqKV0PWuWguQze9Owxe801EozAQHpPGqC3DNA4GnAHgakCR1p4wjVYtQAU1miaIZKYy79bUrQS4hmp1NcMvF6eFiiG2fEZpC9SECmMtINBpdVdppdFSRaq5TTiKXDE0Uw8MY6U5aVEBtN6kRFG59KRUCzNKzTw/KlApGo0u1Cna/WmFaVDTKEkk0gQ1xxgCOtOaNxTowiiu1AnlSajtXVaHK1IknbgfvTalU8v2atKA2NITT8VBNvSmFDQTlE11MFdVow5vWkRTUi9edPZxtFVqRIvSRUTGPCph0tS+7nqaPTuK3L9tYTYnu5vtPCZIj1q5w14xWGyGXAzLH/ANXjz1mtyDenByTqJF6bpI61FjZxEUs7BR1MelVOL7U4eyI7twAED63+lWCaJ7S7TXCtGprSskHSeM7esUSmMpQO0KCFNyDGqLSLGqJ3d3LuFUlYCi8AHieJontrHAwUAZJJSUJkso38IME+Bql1q8cxcgUjJQ3YeM74Ks4vLcZkTvItvIo0t9KhUBXpSBakcgXsKGTOoXKBgSACTIi5iJ52+tKTDDpCs1JNIaMWozh04YNKvnTgasWmAEGaQKKlmkYCgkXDEbxyrkSeFNZuHClBbcb0o0rTYpQ3OunpUkOJhzU2DKiKSa4GqQW9FJmkIrlAp0VJGxp+E3SuAFJtUTcQzwp/u7SJpxNoPGppBiKpBoYKeNdRKTJrqsGq3P5tcNZY3PwjiT+nWpshjq41C/A3uOlZ3t3tRH0WKlS1jEkREiDt41Xj2p90rBEBkkyx59P71Y1nTdE8PrVdnO28PDYAkNvr0mSgHGAL3IHiaxuF7RHEUvi4kAOIVbAiVmwubTvNBpGM+KyagCHiBeNOo8YgxtTmL8rwZkLrxlEz/EANp72oA8qrcf2izGKYUxOyoPz3+tWLon+VkgKBhr3rA3A24knpVMva+Gg/hoSYuTx8TvVP6ayJhlHYlsZyIEm8keJNT59grDCwWYMjd44YksJsGPXxqoTtguxL4alp7s7QOczxqHIZp8J2dRqLEHbSAQSbc9xan832nVm/ta6SHRWjcglT+lNwc+mZLYioVGkhvxW3PdqpYSZYAam4i5k3A1GOJorsvKMZGsD49hudJuev6U2ccE3WlyXbGJgTbXhkGBxW55biBSZbtvEcuysisWGqL2gaYm4tAPWaBYskLirG4DrcHxnjfj9KCbLgLiNcAkEMthHdB4+NZnasiyzOM5+PFY9CbfWg8tnhqIDfEqiTAWzAHcbkW8utVxxUF9M+JJJ9LU/JY6l2JVQGXaIWx25VrMieoDMBUQk6tRVZAtJtNuFEI4YSpBHMbcq82HaDhUw2XUivKlSFYcInz41ouyvaHCw8JELO7wSRpgC53LGFH76UYxY01LWcX2xQgkYbGONgvS5v9K0WXx9aK6nusAR4EVXjR4czRwqMtUhpDes2GVEEmn4aX5U4rTgKpFaT4jcRFSLa3Cummca3sYOOEGIO9qayLe3OpRh8QYp2KtxVcQFlikWlxWkk1A71jW5NTEGmFqVXqNzeiqFbEtS66hNSJtRrWCDjE11MArq12z0w3avY7t8BAgRbjc3PGf0rOZ3Iuh74Y+F/Wdq0GB25waV8e8P1FHjPI47wDdRf6b1byjpMrz3EJHwrB/muaKyeadEZZu8iRaAQFIF7TtR3tCMNDKgyZM7ACY9aqMsSygnc+A411nc1n7goYzsACZgACSTYctR5cqfhYc6byCTfw42qsXDnGQ9PyP8AarjLCyef2qvSiHO5j3aFlUE6it+EcbXPrRuCPingWA6CB+tQ5nAZkKgAd8m9rUQrBS3GTsOtFvRnqvxUBfDaJgJcm3/NXfZ+KFcz+JvqtqrWVJmJ06eNx5eV72qZc1BEhbnvHcQbHbkPtRe1Ol52vmGCqUIksi3Eggm4I4ig8/kdCEoYFpXdTJNxxG1S4ZXFRRq03U3uJBmJ9KJzpIRhzKfY1iddNMy2GSJ6cgP1NP7LyuqQZ3QTN/io18G334fek7LUg25qx8NY/Wum9BIdIAuAUe7bzpN55GBsa7FTWNiyiO6NiRaSTYeH3qTCwQGx7RqI8+7HHwpi5QoqsrlWY4a3uCSi2bjc8azqQY+VYpqB7y30jYReOtuNa72P7UUpoZgOKT1+IX5G/mazCYxkgjS0RHym1oO3/NRYHccoJAYErO4mQy+h8Kd+M2a9Tmuk0BidpIgwhIb3kQZ092B3vUrbrR8xWKyfXTTS1cKkcDSg02KSrVgpOlMxTJieYqNTyrnXrVowMy3IqJkovTULiN6MOokEU5vCnQInrXEADjVi1Cwp4FcSeH61IinxHOrDpVrqVfCkqDC4vZuG9wsHnhsPqrGB5GgX7GYfA4J5fA/od/WrhMEYOGXKKzajsLwFMAHgbVxzgxMN3RTKbq8EGI1b9J40/q/HXGccODoxRP8AKwgx4kX8qjxMnhfKSh5H4Zma0fZup1chFKzsxkTF9PIfuKhz+QwipJR8Mwdrr6bxV+u1jKaFDSYmYkflJqfDfl+/ypcLCTifoBRCYKEjSJnbc8/0NdNZwOCP3vt5n61IqTwnyt/329KLVTBtbrA8agZiTEgDxnnRpPTAvcgAiCCZAtwGwvTcDLoCQVJgtN4ixNr/AErlw1j4vK012CC5iOcHwBP2mpLTE7GPxYTkfytZvAHZvA0JmMd0Gh1Kz5CeEjj5TVhlkxUZlIJALWmRbRAk7bkwOlT57NEIZU3mAw1bG/h0rG9lQHEnbU08lj6kn7VCjOLhCQLkGSIHMLw8qIbtGeY8Bauy3aGltYkQpkzsJE+NdO2RGX7SVpBHA73MjaD8w6G9F4OKrqiggkPhnYidKgEAkXI6UFmfcurau48GOCufA2Jnl6UzL5JwutDOqZSACYJ2BOl/CxrORDM8shRAviKpm9it/A9aBzGXYbnUF2/ELA2n4hvaeFFYGaBs4Igg3kQRtvdfBvWiVQNFp0tq8tDLPrxq3CFy2aYvhFWBAcMAbqGNttwePDhvFelHbqK81z2U740nSQoM9e9uOO1eg5MOMNNbBmgEkCN4/c0cr0xyglacKZTg3OsxHTSgU1aUGkHimFxSFqiZ6lIm1UjxBn0qNTS6r1SqwMhabi1T6+dTI4ofGwr2o8W6eGMRv+lPw3N4E1B7vlauTEIMEGrVgpTc9wetdS4ZngRXUjWS7VaMMf1H/a1AdnmUxbbzPpVl2oB3VIJBYmRwgeBnehMs6d8K0ko3dCiZuZOn8wKzPHfROHhD3TgCBDbeFUXY2axG1o76lCNY34T+fjWieRhPAkwbDw6VSZDLFHYllIKP4gxNxvwPpTPKKpBPBVHlRWWQgoCT832bzpmGoEmi0IlLbz9jTaArLJPG5+9qamHE+HruKmUfnbzNNLd49AOEczUiphbiLdLcabkU756av9hqfUAt7T1534UmQS7EH8XX5KdLU5ZF1PqiA73No7qelVfbWEjqdJMDVBBkfCPI3Jpe2ndSQili2K8gcQFQ0BksQtht+HvxJvwmaJPoBJlhG59al7KyilWt8jx609WkVN2S50tx7mJ9ya0B3avZoXCmP6b9Zv1/c1SZTK4yINET7tDB+FrG1+MVadsdsFpw4sCyz/MATE7Xg+lTZd1VAW//ABpHjpaNqPIlcmaR1HvF0NtN9S3iNW4vwMjpTGyTr3kOtekTHGw+6Hyru3MHUiaBdigt1bEO3lUOBlcVFJQjujUQZIIBaQBO+0eFKcuaLHaIgE+sX24nka9IyDh8JGBkFF49BXmWfRHYsxKvIWRN4JBB58eM16B7M9nqmChUkllUsTxMcBwH1ovjPJZxXL1rsSow1ZwJx0FI5ioSTO9PVxxpTi1N0mn0xgetC0oNMdqWaRyKiacQ1CSanKioitVqhsngaVGab0orlBrFItCa6kw1NdWu2emZ9qQRgMykgy0EXggUns2pbCcuxY+7NzE7dKl9qh/4NzuQxI8loX2ab+HiAcEafKKZ/q3vq2dtKMQJiT9qrP8AqaYit3CDoJ7w5gkRVpjmMJz0P2rNYRsP/wBeGPpVJMO9qPFzyKQpBkkQL3kx9zVqg+C20/Y1SZjCBdJAm3+//irsNdP9X2NbuKIWBI3jkBtxNDqkcflA+pqaf7ejUwEd6fw/djQiKFKmeM/v70VkB8Q/r/2UG9hA/m4DoRU2VzKqWlo+L6pFSW/tDhd1jO2K31RPSo8PC05dN5KOTeb8d+dE9t4iOjlWDfxDEH+RP0oc5lDlkGoatGJaRO/KmeM6r1+G1Sdkr3D/AEYn50zDcaRUvZT91v6MT/3VNIcZB79lKjuu5JPHVBFuIEij+0MMHCUT8SYY9Vf9KHzQ/wDEP1Zf9q0fml7mH/8AzH/bi/2qrPwFmS6YKEGWCqVO0f8AmmbX2Bk+NKmaC4MkfGALna8yY3p/bRIwUg7+7Uxy1YoPjItFR5nCnCSRJMesFr+hoLs5lhpZwLl2PDed60fY3bOCqLhk6CojvWBPQ8L8DWezWAS4VYAhwB0DG31+lImQc/JYk7sb36Kap0LNapu00OMcPUunSIPAsbxq22/Op1xFImbHY7dKy6dnONlA4/E//wAaIxcxiYejUmvSRpA7242ZWhhblItRkozGkn0pRQWVzmE47jaGG6mSvn8yeYiiC8EAiOXEHwIsarMSdWriaYFNITBAm5m1Aws0jGa6KZqqWErlBmnhOVPQxWca03T41xtUwf1pNM00Q3BxBJmuqi7Z7U0PoQ94XY/lXVSU4MwTh4y6XABDyIeJERuIvvapM32bh4WHiOjOBoYG/TaIvNhROdwMMBnYoEUSxZVI8yVB5VX5dcDF1e7KNG6gMrb8g/5Vv8s/o0H3uE6o6yTF5ttVVj9nOl4EKoFjJgeI5VaZjKMhBQ6ZF7sQeW/60FmMxilWnSwg9OHSaG/5ZfEwJKH8O9hfvTzogCTYExxmOEdaDDPEnT6mkOvmB5/2pI4YVyCv1nnbamEFZsv3/e9CEv8AiE0gRzfXPr+RpSdrfMPQH71XphkvJLxq4NFpvH1qbEwm/Eb8z+poVMgLAzM9LXgbUzIM1LmiukhmcifhZxcWm0b8PSo8oqAQ4UnQR1JtxNzt51JidmpoJAJtwj8hUuXyiMQDPwT8RmbfrTswYNXKd0Mh1bRpOoRB3Avy4UL7pl2WbkXkbzccZvNHZrs5EEozqBAAkMOHOeFQZjLYzKmnFVgWUiZA/EOY4bisytWHYeYJfU4IuBe/IbjerDF7YwiiQ4kBOB4BweH8woRGxVMMitsSFIvvf5R8vI1Sh3GoBHi83jpfaap2K0HaPaWHiYaIpJI0fKflZyeH8wpr9pDQihMQkR8hgwGBjnuKo0OIQYQ8LE8zH465cN/wLb9861kZXWN2wDiAhH4i8A3Ym97RNXGB2zg4pRDi+6vfUInukQCbbxxrEMmLqUDSDqAERztzo3vCzYZMcu9uCJ7vifloshb7szEnCBkmZpe0cwHZ0kzh4igR8v8ADOx6m8Vg8DNhD3MRkPK4FuY/+taDsntEuG1uhdnw44M0KwnfhIG1GYKPI1gFgGJiD8DgGQCGXe42gb08Yzr3UxLk/C8K077nusfrwoXCwpWQSJw2An+vUJja7R9aIRjqfxLWIv8AxOY2MOB0qTP5zt3MBmAxiYkWUDmDaN7b1XP2xmSe9jPMQNgY47C3GrLOZSXPfYDU0idhN4BtbhVOMm8sXEaUJEXkiBFvH6UyxYlXtHFA0++xNNohm35+tX/sZiuXxNbs0hfiYtBU33/qrIYeJxvAIH+pth42NbX2Jw4VmM3LbiOK8/A08vE1IPAGuQ07TUTZhV2M8Ok9TFq5YtEahEmAOM1V5vtrD0kKQBEam48CFHHxrLe0HaTu7Ix06eAMgedVOA5Y3aYgDjHgeNanHpLjO5lHYOoMxpM8QIg2470tADx9a6tSFoP8Qcd0wBhxbEcknot44jePQVn/AGPzTK+G0mz6T1DECPQ1o/8AEqSmCssRLmDG40xfwJFZ32VwQ4sSIxALAfy3vVuRnj20H+IudbCwFVDDP3CegmTsOX1rPeymZJQgk3VgfECQd+VXH+JqEDBWQ3xmdIFxA4b71nfZ2VVjYAMxNifkHI8quWfk8SZjD76QTBm02tq/QVZoi6STv0/dqAfNhWCNY2HwmLxFwaIfDJHMHy/OdqzWwOeYFZGoSeAOxB5xxii8lp0/EOHEdKhxc8qd64BJgAExsY36ipcvia11hoUCSIgxEjjvVfBFd2zhanQqCY0zp/qG/lNGq4J4HvN140Lmu0QndIa3JeHrS4WGSVM/MenHl9KfnanpcwPjtIvA340flItH4OvTrUOZTukajseX6U8ZUlR3zJQztuRPKr4Vx2qx0PEhipAImRJFwd6YqC0be8kX/ENfP+amlfdHXraIOw1EceGk0iI7EsrC+IsAyLhQNpPKKPi+nuV951XT5lmYGTyi/iKo885VnP8AM3pPhV3ioQ0ELr1KYBaY1DmoETVB27gtD6hHdfaLVcfRfGexc2z6jqIXx343qbsntZlZUcyjmBNyCYgg8pi3nVdiJ/DJMglrcj0+hqLBXvpO0rYb716fzLHD9WVv8OA6ETOsQb7SKi9+wzrr8ow1A4X+KR6mkTDeUOkTqEX6jpXZh4zJOkg6e8LRt4jpXnjvTBnZwsZnUHQ76QRuAbbjiTV52JhJhiQijWV7xsVtNpNgZMx0rMnFDJiLeCTeOv8Aatb2JqdMIqLqyjvCBdCdzERp4c6ayjy3bQQFSjmBJgbAWkdDf0FG5ftfCYkhgGMg6li+/wAw5mfM8qsGyex90pskQymRcLxJIb61V53JHQwTBfUYFuMnvTYAz1rF9UyiMXDR4Mgg8eIk0HmsjAJXU0fKq6j6CPrR+GLQbEEzxvN6hzWaVQVbZlYSN5i31qnprNviobMpUggww4gyDyFXvs7miGCl9Z0sbAbSIA09IobOZtNFyXiY1d6PMzHlS9k5nTm26BhHpWgsM/7RKQURSDtLW432qizGK7lmk3iYtsI87AV2ZbvvECGb7mg3xCeIqiQdomcVyNptPgBTMCAT3qidASTM3Phuamy6AE/vjWkJwXF7feursC5MetJSmx9vsAv7uOAxDy/BPjes57Jpptx97/8AGtH7U5vXjDCUXXDJLTN3MARuLLPnVL2JgFHAJE+8m1rSt78DNvOudXHwR/iuzacA3H/mDht3Y2qm7Gwv4eJ/q/2VpP8AFBNSYXi9UPY+HKONpJ36oKeV6XDxW9oJ/HQTaU+9WqiB5fl41FiZTUwckSIO3K8b3oxGCgTy/fGs29NqLtXCnDQzxP8AtH6UXkU/gC/yCduXjRL4QZAGNhsQOkdaiDBEYFoQCJINuA43JNVuzFFD7QIQw0zBVpsOZHGatMETfhP51D2hhh01kkAIW2gxdjZuIqTsvMB0Vwe6T4fNfj5Vr/kfVJ2zmsXDLgObNA8JP9q0fZrmw/kP2HWqf2lynff+oUe2b9ygYEBj3RqmIi8xfYVu5eMxmdWtF2y5GGSGggGCOFvE1PgLaP8A1fyiqg9srj++RYISBIJ3IIbe0SCLfpV2iEAmNsWPMibX61zssmNS6EzSD3xIj4VH/cTw8KqvaHDBVx0cfU1cZbMDFR8Uo6FHCAMPiWbN3oInUbbiKru1VDSJA1FhJ2Hei8dTR3KPYwWdTuIP5v1qJMP+JhzzX7irPEyhdJBA0jVcHgxXSI4yDvyoYJGJhE/iA+q16JXOzttmQDQRxa+3Og82yjHJO0f+2jcbHM4crCB9OoXliQYIF9uO1UvaWPON3V5gwbDSCD6Qa4cZXW1XZfHLNiRaGYD61tPZIlsN0LQBcTv8DrY/6qw2Qf4/E/nV/wBn4jzpVWDbEXFwL7+Brpy6YncegnIEaHDahqwRPCE1aZjqaDwlbD1TFkw5npiOZ85qjyObYdwO3dK6u8bklv0FRZvO6VQkkh9rzphjOr8MxWNWL1Wux4SfvVP2q8lSBO4/f1pXzLfDEcb2HEm/CynzIqvzOcVtfAIRJm39ryL8jWZGrQmbcGbxtJuOIruzc0ffFuYa/Lb+9Crj6whSTqtteZAg8jTUDpj+6CnWe6Ik3PHbwO1dM+M6PzWYCgy1ixAYiZJPHxoZnM8PSs/2vmMXWuHJ7pkzeDqiWkTA/Oi8bNs6FVOl4U9dr+la/GSD9ejim9jx+/hUiJE2tNU+RbEVzrckFYAJJGokR+dWqZi+kxqiYvt9qOUwy6ssiN+G3CursNh0H7/5rqNI/MYbf57MYgkLpRlbVf5F243DWPKi8hmkfM3JnVCTeQFViL7XB9atv+l4JJbRciDvzJH3Ndl+x8JGDqp1Aki5MEzMVzvKUyYN9osmuZVFEroJMwOIjhVVluxShJDKZM7RwAq4fEgT96jXGXmPWsXlap1OlUeyGGxWnL2WwG49KtQ686a2Ko41NbVQ/ZTc1+prCe1vZ2IccJq7qoGgWFyZ33NvIV6ec0vMeorMe1OXXFbCZWAZS4MNYqVgAxuNZXynnW+Fs5azy7jP4OVx2y5wxAhQdZPyxqjmZ+CeHOiPZzDLviadITu6RJK9YN59eFXWWzhOjC1Ie4ytFo4WLEAW0kfnwT2JwQqYi2LJiOuoCxUEhSOm/nNN5XKutLnuxNbO5gFr86zvbWTxFdNAkqpgxbVwnrYV6OSacgrPHlZWrOmH9nuxnnMMSveeNp5sYjYXAjpV77RI5yrqi9+bMNxqGix3kapq90iocykrbeVI8QwI+op/Vt1nJmMV7PJjo7YOKuj3iAlOQTSVcAWMwRa80Z21lmI7quxLgxotBYE3/tV7lcE6w7gEhNAgzbU7fQEL5HnR7EdKeXLbqk6YvNZd9UYSOqYmoOsGNJggSRf5uW9CYHYxRw/fOkyFIBH1E/8AFbmFqLGYAWBPQUTlTjI5x8Vu6ohSwLbbjxuNhtWX9pM4RmsQwRIULBgfCPiHzSSfWvRMfNAfK/oa877Qyz4mZfFIMaxpkbhe7tuNuPOuv+Oze3PnL1gwIq5YuVZGYNq4kXImDFyPrTOze2vdMQrtiFyok3MC0gcBEWq4zDB8Apph78JFmmQQOVBdlZFcMsWVJMQYg8Z8P7UzlMunLvS8y2ZhjYFnsZG8nn61U+1vaOM2YVFKjSgESLmTDWtsI8qnxsTS6soBgk6duHWsx2gHbHZ7k6ht0GmPDhRwnY5Vvch2spRNaKW0rqYCxPE8ONUeBhqvv3AF2sJmQWZtjw2nzpOyMKcObkEkjpzHrPrSdrZV9AOFqDhlPdnVyPw3sCT5GiTvDfNC9k9rNqdCL6taACNMN3gBG1wecTVxnn1kOEIcaRqEg2AE+gqs7F7HIdndm1ozL0ZSBBvv61a4mGB816uVm9Ljudsu2JOJi6zcyBtwMXkyYMeN6sf8gohUaQoFzvdQxJHC9NzWVGt4i5BJgapCP6yQtW2DkzJO0kbcuvPjTeSkU7ZBwDEzwNrGLfWKH95iBtIV2Hcg7DUFbVtY95usQa1SZMRu3rVe7CSmiQmKig/zOysfIc+tU5arxTZVWYA4gOqL+PlXVbYeUXiv511Y2HGjVDTXQ9ZolkPI0q4R61wjYX3Q5E09cNfwipSp60iqetK00L0ro6U8g8jTWY9agjfBQ/IvoKhfs7CJkos8x3Tfwon3lNbMAcD6UkM+WQfIviQCfMnfzpcsFUQoCiSYFhc3obMZoz8LR0E0xM4gMFyDy0/uKz21nS0AJpWEDf8AKgv8+nNyf6SPyqB86DthseJkf2rUjIt8Ffxkf6j9L+FNfBJsHcbHedv6hQf+bcnupPgpP12rvcY5vAHQmPtWsQ5cAru4jqw/Km4mPHzA/wBN6p3yuIpvE8gwnyEyfSm6MUj4W87U4Fk2Ks31T1NvpXe+PADzJ/Ogkyr8vv8AelOUcG8ny/MUYRetuLqo8R+VROiMQWJaLi3Hnc1CcKBcR5Ui4R4BvSBViE68MWhZ696PW1MfFERAjwA/Ko2wyPljoJNDvM7H0n7VYC4mEjbonPahn7OQ/InkImnsX4IfShsRsbijeSmfoaYKndmEWQADmQOm00Icy/BRO0hrgbW58fWpkyeIwuI5TN/vRuXyED4Sx56T9Jp2JAMMuBNgAAJjxNgY51MmSTaCfv8A2o9Mo8XVh5bVIcAjn6VnSq/+lpq1AGZnc8iOPjUgy45kVNis0hQDJ4cuNzSYWGZNiTFyAYpRgyx/E30/Sov+lgyNRksGNhMiI4cIo1VOwVvrT8PDYk2PpRqPw8NeMV1Lh4Zm6kWt/wAV1Kf/2Q==",
        date: "28.07.21",
        title: "Открытие сезона «Ла Скала» отменено",
        text: "Миланский театр La Scala отменил открытие сезона. Первый спектакль был назначен на 7 декабря — «Лючия ди Ламмермур»."
    },
    {
        id:6,
        img: "https://htstatic.imgsmail.ru/pic_image/1c72a571a4a9e1b8f9bdf37517fb6fc2/450/450/1670438/",
        date: "21.05.21",
        title: "Iphones",
        text: "Работа над книгой велась более пяти лет, и действенные методики, описанные в ней, созданные в результате анализа и синтеза идей…"
    },
    {
        id:7,
        img: "https://images.samsung.com/is/image/samsung/ru-galaxy-s20-plus-g985-sm-g985fzpdser-frontbpurple-255590904?$720_576_PNG$",
        date: "25.01.20",
        title: "Samsung телефон»",
        text: "Премьера клипа «Космические силы» группы «Мумий Тролль» состоялась 6 ноября 2020 года."
    },
    {
        id:8,
        img: "https://i.pinimg.com/originals/14/8f/ea/148feadde119932cefbdc8c1854b1af1.png",
        date: "05.03.19",
        title: "BTS получили четыре награды MTV EMA",
        text: "BTS получили четыре награды MTV EMA 27-я ежегодная церемония награждения MTV Europe Music Awards состоялась 8 ноября 2020 г."
    },
    {
        id:9,
        img: "https://img.championat.com/s/735x490/news/big/z/c/lokomotiv-prodast-liderov-chto-proishodit_1627470682428042079.jpg",
        date: "28.07.21",
        title: "Болельщикам «Локомотива» не стоит паниковать",
        text: "Уверен, куратор спортивного направления «Локо» Ральф Рангник не будет сам себе её портить. Слишком уж мощно в Германии обсуждали приход его компании в Россию."
    },
    {
        id:10,
        img: "https://img.championat.com/s/735x490/news/big/z/l/kasper-ruud-rvyotsya-k-tretemu-titulu-podryad_162759202883797465.jpg",
        date: "30.07.21",
        title: "Каспер Рууд рвётся к третьему титулу подряд.",
        text: "Каспер Рууд завоевал титулы в Бостаде и Гштааде, а теперь он в полуфинале Кицбюэля. Видеообзор самых красивых и интересных розыгрышей."
    },
    {
        id:11,
        img: "https://cdn66.printdirect.ru/cache/product/e1/78/447440/tov/all/400z400_front_29_0_0_0_268f93d1135e13150605d2066674.jpg",
        date: "25.01.20",
        title: "Юрий Колокольников пытается спасти Землю в клипе «Космические силы»",
        text: "Премьера клипа «Космические силы» группы «Мумий Тролль» состоялась 6 ноября 2020 года."
    },
    {
        id:12,
        img: "https://i.pinimg.com/originals/b1/c7/16/b1c71652dbc9412ac11176f440d2ee05.jpg",
        date: "05.03.18",
        title: "BTS получили одну награду Korea Voice Awards",
        text: "BTS получили четыре награды MTV EMA 27-я ежегодная церемония награждения Korea Voice Awards состоялась 8 ноября 2020 г."
    }
]

export default dummyData;